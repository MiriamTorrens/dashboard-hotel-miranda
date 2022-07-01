import styled from 'styled-components';
import { PropsButtonStatus } from '../services/types';

export const Button = styled.button`
    width: 125px;
    height: 48px;
    border: none;
    border-radius: 12px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ButtonStatus({status}: PropsButtonStatus){
  let color:string;
  if (status === "Available" || status === "Check In") {
    color = "#5AD07A";
  } else if (status === "Booked" || status === "Check Out") {
    color = "#E23428";
  } else {
    color = "#FF9C3A";
  }
  return <Button style={{ backgroundColor: color }}>{status}</Button>;
}


