import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data = [], barColor = "#1abc9c" }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    d3.select(chartRef.current).select("svg").remove();

    const margin = { top: 50, right: 0, bottom: 30, left: 0 };
    const width = chartRef.current.offsetWidth - margin.left - margin.right;
    const height = chartRef.current.offsetHeight - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const chartArea = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.range))
      .range([0, width])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.amount) + 100])
      .range([height, 0]);

    chartArea
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .call((g) => {
        g.select(".domain").remove();
        g.selectAll(".tick line").remove();
      })

      .selectAll("text")
      .style("fill", "#1abc9c")
      .style("font-weight", 500)
      .style("font-size", "20px");

    chartArea
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.range))
      .attr("y", (d) => y(d.amount))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.amount))
      .attr("fill", barColor)
      .attr("rx", 30)
      .attr("ry", 30);

    chartArea
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => x(d.range) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.amount) + (height - y(d.amount)) - 10)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-weight", "bold")
      .style("font-size", "20px")
      .text((d) => `$${d.amount.toLocaleString()}`);

    const line = d3
      .line()
      .x((d, i) => {
        if (i === 0) {
          return x(d.range) - x.bandwidth() / 2 + 50;
        } else if (i === data.length - 1) {
          return x(d.range) + x.bandwidth() / 2 + 50;
        }
        return x(d.range) + x.bandwidth() / 2;
      })
      .y((d) => y(d.amount + 200))
      .curve(d3.curveMonotoneX);

    chartArea
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#1abc9c")
      .attr("stroke-width", 1)
      .attr("d", line);

    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "white")
      .style("padding", "8px 12px")
      .style("border-radius", "8px")
      .style("box-shadow", "0 2px 10px rgba(0,0,0,0.15)")
      .style("pointer-events", "none")
      .style("opacity", 0);

    const hoverDot = chartArea
      .append("circle")
      .attr("r", 6)
      .attr("fill", "#1abc9c")
      .style("display", "none");

    chartArea
      .selectAll(".hover-area")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "hover-area")
      .attr("x", (d) => x(d.range))
      .attr("y", 0)
      .attr("width", x.bandwidth())
      .attr("height", height)
      .attr("fill", "transparent")
      .on("mouseover", (_, d) => {
        hoverDot
          .attr("cx", x(d.range) + x.bandwidth() / 2)
          .attr("cy", y(d.amount + 200))
          .style("display", "block");

        tooltip
          .style("opacity", 1)
          .html(`<strong>Amount:</strong> $${d.amount.toLocaleString()}`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", `${event.pageX + 15}px`)
          .style("top", `${event.pageY}px`);
      })
      .on("mouseout", () => {
        hoverDot.style("display", "none");
        tooltip.style("opacity", 0);
      });
  }, [barColor, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] md:h-[500px] gap-3 overflow-hidden">
      <div className="flex flex-row md:flex-col justify-between md:justify-between p-6 rounded-3xl bg-[#F9F9F9] text-[#7D7D7D] w-full md:w-auto">
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3H2V5zm0 5h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9zm6 5h4v2H8v-2z" />
          </svg>
        </div>

        <div className="ml-4 md:ml-0 md:mt-4">
          <div>Wallets</div>
          <div className="text-4xl md:text-5xl font-bold mt-2">7000</div>
        </div>
      </div>

      <div className="bg-[#F2F9F7] rounded-3xl p-4 sm:p-6 w-full">
        <div ref={chartRef} className="w-full" style={{ height: "100%" }}></div>
      </div>
    </div>
  );
};

export default BarChart;
