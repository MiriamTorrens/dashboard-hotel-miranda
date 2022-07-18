import { useEffect } from "react";
import styled from "styled-components";
import {
  select,
  scaleBand,
  axisBottom,
  axisRight,
  axisLeft,
  scaleLinear,
  scaleOrdinal,
} from "d3";

const ChartWrapper = styled.div`
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  width: 49%;
  background-color: #ffffff;
  height: auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
  @media only screen and (max-width: 1000px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
const ChartLegend = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 60px;
  float: right;
`;
const LegendData = styled.div`
  display: flex;
  margin-right: 20px;
`;
const Square = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 8px;
  margin-right: 8px;
  background-color: ${(props) => props.color};
`;
const Data = styled.div`
  position: absolute;
  box-shadow: 0px 4px 4px grey;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;
  visibility: hidden;
  margin: 0 auto;
  margin-top: 60px;
  z-index: 1;
`;
const Svg = styled.div`
  margin-top: 90px;
`;
export default function Estadistics() {
  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 20, left: 50 };
    const width = 550 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const subgroups = ["sales", "occupancy"];
    const divData = select("#data");

    const svg = select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    //Crear Eje X
    const xScale = scaleBand()
      .domain(data.map((d) => d.day))
      .range([0, width])
      .padding(0.2);

    //Crear Ejes Y Izquierda
    const yScaleLeft = scaleLinear().domain([0, 5000]).range([height, 0]);
    const yScaleRight = scaleLinear().domain([0, 100]).range([height, 0]);

    //Añadir Ejes
    svg
      .append("g")
      .call(axisBottom(xScale).tickSize(0))
      .attr("transform", `translate(0,${height})`)
      .attr("font-size", 15);
    svg.append("g").call(axisLeft(yScaleLeft));
    svg
      .append("g")
      .call(axisRight(yScaleRight))
      .attr("transform", `translate(${width}, 0)`);

    // Crear barras
    const xSubgroup = scaleBand()
      .domain(subgroups)
      .range([0, xScale.bandwidth()])
      .padding(0.05);
    let color = scaleOrdinal().domain(subgroups).range(["#135846", "#E23428"]);

    //Añadir barras
    svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${xScale(d.day)}, 0)`)
      .selectAll("rect")
      .data((d) => subgroups.map((key) => ({ key, value: d[key] })))
      .enter()
      .append("rect")
      .attr("x", (d) => xSubgroup(d.key))
      .attr("y", (d) =>
        d.key === "sales" ? yScaleLeft(d.value) : yScaleRight(d.value)
      )
      .attr("width", xSubgroup.bandwidth())
      .attr("height", (d) =>
        d.key === "sales"
          ? height - yScaleLeft(d.value)
          : height - yScaleRight(d.value)
      )
      .attr("fill", (d) => color(d.key))
      //Eventos mouse
      .on("mouseenter", mouseEnter)
      .on("mouseleave", mouseLeave)
      .on("mousemove", mouseMove);

    function mouseEnter(event, data) {
      data.key === "sales"
        ? divData
            .text("$" + data.value)
            .style("color", "#135846")
            .style("visibility", "visible")
        : divData
            .text(data.value + "%")
            .style("color", "#E23428")
            .style("visibility", "visible");
    }
    function mouseLeave(event, data) {
      divData.style("visibility", "hidden");
    }
    function mouseMove() {
      divData
        .style("top", parseInt(window.event.pageY - 110) + "px")
        .style("left", parseInt(window.event.pageX) + "px");
    }
  }, []);

  return (
    <ChartWrapper>
      <ChartLegend>
        <LegendData>
          <Square color="#135846" />
          <span>Sales</span>
        </LegendData>
        <LegendData>
          <Square color="#E23428" />
          <span>Ocuppancy</span>
        </LegendData>
      </ChartLegend>
      <Data id="data" />
      <Svg id="chart" />
    </ChartWrapper>
  );
}

const data = [
  { day: "Sun", sales: 4000, occupancy: 60 },
  { day: "Mon", sales: 600, occupancy: 20 },
  { day: "Tue", sales: 510, occupancy: 15 },
  { day: "Wed", sales: 3050, occupancy: 52 },
  { day: "Thu", sales: 4600, occupancy: 70 },
  { day: "Fri", sales: 4700, occupancy: 80 },
  { day: "Sat", sales: 780, occupancy: 30 },
];
