import styled from 'styled-components';

const ContainerCalendar = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    width: 49%;
    background-color: #FFFFFF;
    height: 510px;
    text-align: center;
`

export default function Calendar(){
    return(
        <ContainerCalendar>Calendario</ContainerCalendar>
    )
}