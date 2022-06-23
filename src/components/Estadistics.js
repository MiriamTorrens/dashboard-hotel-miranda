import { useEffect } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

const ContainerEstadistics = styled.div`
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  width: 49%;
  background-color: #ffffff;
  height: auto;
  font-family: "Poppins", sans-serif;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
`;
const Leyenda = styled.div`
    display: flex;
    margin-top: 30px;
    margin-right: 60px;
    float: right;
`
const LeyendaData = styled.div`
    display:flex;
    margin-right: 20px;
`
const styleData = {
    boxShadow: '0px 4px 4px grey',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    visibility: 'hidden',
    margin: '0 auto',
    marginTop: 60
}
export default function Estadistics() {
    useEffect(() => {
        const margin = { top: 10, right: 30, bottom: 20, left: 50 };
        const width = 700 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        const subgroups = ['sales', 'occupancy'];
        const divData = d3.select('#data')
        //Crear SVG
        const svg = d3.select('#chart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        //Crear Eje X
        const xScale = d3.scaleBand()
            .domain(data.map((el) => el.day))
            .range([0, width])
            .padding([0.2]);
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).tickSize(0))
            .attr('font-size', 15)
        //Crear Eje Y
        const yScale = d3.scaleLinear()
            .domain([0, 70])
            .range([height, 0]);
        svg.append('g').call(d3.axisLeft(yScale));
        // Crear barras
        const xSubgroup = d3.scaleBand()
            .domain(subgroups)
            .range([0, xScale.bandwidth()])
            .padding([0.05]);
        let color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#135846','#E23428']);
        svg.append('g')
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('transform', (d) => `translate(${xScale(d.day)},0)`)
            .selectAll('rect')
            .data((d) => subgroups.map((key) => ({ key, value: d[key] })))
            .enter()
            .append('rect')
            .attr('x', (d) => xSubgroup(d.key))
            .attr('y', (d) => yScale(d.value))
            .attr('width', xSubgroup.bandwidth())
            .attr('height', (d) => height - yScale(d.value))
            .attr('fill', (d) => color(d.key))
        //Eventos mouse
            .on('mouseenter', mouseEnter)
            .on('mouseleave', mouseLeave)
            function mouseEnter(event, data){
                data.key === "sales"  
                    ? divData.text("Sales: $"+data.value)
                        .style('color', '#135846')
                        .style('visibility','visible')
                    : divData.text("Ocuppancy: "+data.value+"%")
                        .style('color', '#E23428')
                        .style('visibility','visible')             
            }
            function mouseLeave(event, data){
                divData.style('visibility', 'hidden')
            }
    }, []);
        return (
            <ContainerEstadistics>
                <Leyenda>
                    <LeyendaData>
                        <div style={{width: 10, height: 10, backgroundColor:'#135846', marginTop: 8, marginRight: 8}}/>
                        <span>Sales</span>
                    </LeyendaData>
                    <LeyendaData>
                        <div style={{width: 10, height: 10, backgroundColor:'#E23428', marginTop: 8, marginRight: 8}}/>
                        <span>Ocuppancy</span>
                    </LeyendaData>
                </Leyenda>
                <div id='data' style={styleData}/>
                <div id='chart'/>
            </ContainerEstadistics>
        );
}
const data = [
    { day: 'Monday', sales: 20, occupancy: 15 },
    { day: 'Tuesday', sales: 41, occupancy: 52 },
    { day: 'Wednesday', sales: 58, occupancy: 59 },
    { day: 'Thursday', sales: 52, occupancy: 13 },
    { day: 'Friday', sales: 38, occupancy: 26 },
    { day: 'Saturday', sales: 16, occupancy: 8 },
    { day: 'Sunday', sales: 40, occupancy: 30 },
];