import styled from 'styled-components';

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

export default function ButtonStatus(props){
    const status = props.status;
    const color = props.status === "Available" ? '#5AD07A' : '#E23428';
    return(
        <Button style={{backgroundColor:color}}>{status}</Button>
    )
}


