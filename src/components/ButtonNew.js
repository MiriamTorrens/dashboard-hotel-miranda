import styled from 'styled-components';

const Button = styled.button`
    background-color: #135846;
    color: white;
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
`

export default function ButtonNew(props){
    return(
        <Button>+ New {props.text}</Button>
    )

}