import styled from 'styled-components';

const DataCalendarWrapper = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    width:95%;
    background-color: #FFFFFF;
    height: 510px;
    margin: 0 auto;
`
export default function DataCalendar(){
    return (
      <DataCalendarWrapper>
        <p>Datos que refleja el calendario</p>
        <ul>
          <li>Foto habitación</li>
          <li>Número de habitación</li>
          <li>Nombre cliente</li>
          <li>Fecha entreda</li>
          <li>Fecha salida</li>
        </ul>
      </DataCalendarWrapper>
    );
}
