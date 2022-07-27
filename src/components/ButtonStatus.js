import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 48px;
  border: none;
  border-radius: 12px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ButtonStatus(props) {
  let status = props.status;
  let color;
  if (status === "Available" || status === "checkin") {
    status = "Check in";
    color = "#5AD07A";
  } else if (status === "Booked" || status === "checkout") {
    status = "Check Out";
    color = "#E23428";
  } else if (status === "in_progress") {
    status = "In progress";
    color = "#FF9C3A";
  } else {
    color = "#FF9C3A";
  }
  return <Button style={{ backgroundColor: color }}>{status}</Button>;
}
