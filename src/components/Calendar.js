import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarWrapper = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    width: 49%;
    background-color: #FFFFFF;
`
const FullCalendarWrapper = styled.div`
  grid-column: 1/3;
  padding: 2rem 2rem;
  font-family: "Poppins", sans-serif;
  .fc-media-screen {
    max-height: 510px;
    width: 100%;
    margin: 0 auto;
  }
  .fc-theme-standard .fc-scrollgrid,
  .fc-theme-standard th,
  .fc-scrollgrid td {
    border: 0;
  }
  th {
    font-weight: 400;
    color: #799283;
  }
  .fc .fc-toolbar-chunk:first-child:before {
    content: "Recent Booking Schedule";
    color: #393939;
  }
  .fc .fc-toolbar-chunk:last-child {
    div {
      display: grid;
      grid-template-columns: 30px 1fr 30px;
      gap: 1rem;
    }
  }
  h2.fc-toolbar-title,
  .fc .fc-toolbar-chunk:first-child:before {
    font-weight: 500;
    font-size: 1.125rem;
    color: #393939;
  }
  .fc .fc-button {
    padding: 0;
  }
  .fc-button-primary {
    background-color: #ffffff;
    color: #799283;
    border: none;
    transition: 0.2s;
    :hover,
    :active {
      box-shadow: 0px 4px 4px #00000005;
      background-color: #ebf1ef;
      color: #135846;
    }
    :focus {
      border: none;
    }
  }
  .fc .fc-daygrid-day-frame,
  .fc .fc-daygrid-day-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .fc-daygrid-day-frame:before,
  .fc-daygrid-day-events:before,
  .fc-daygrid-event-harness:before,
  .fc-daygrid-day-frame:after,
  .fc-daygrid-day-events:after,
  .fc-daygrid-event-harness:after {
    display: none;
  }
  .fc-daygrid-day,
  .fc-day-today {
    :hover {
      background-color: #135846;
      color: #ffffff;
      border-radius: 8px;
    }
  }

  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    display: none;
  }
  .fc .fc-scroller-liquid-absolute {
    overflow: hidden !important;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: inherit;
    font-weight: bold;
  }
`;

export default function Calendar(){
    const headerToolbar = {
        start: "",
        center: "",
        end: "prev,title,next"
    };
    return(
       <CalendarWrapper>
            <FullCalendarWrapper>
                <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={headerToolbar}
                />
        </FullCalendarWrapper>
      </CalendarWrapper>
    )
}