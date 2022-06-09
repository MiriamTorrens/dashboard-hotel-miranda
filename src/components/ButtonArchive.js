import styled from 'styled-components';

const Button = styled.button`
    background-color: #135846;
    color: white;
    width: 160px;
    height: 48px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`

export default function ButtonArchive(){
    return(
        <Button>Archive</Button>
    )

}