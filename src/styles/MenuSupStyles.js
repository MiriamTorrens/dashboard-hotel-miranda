import styled from 'styled-components';

export const ContainerMenu = styled.div`
display: flex;
justify-content: space-between;
box-shadow: 0px 3px 10px #00000005;
height: 100px;
width: 100%;
margin-left:30px;
`
export const Title = styled.h1`
font-size: 28px;
font-weight: 600;
font-family: 'Poppins',sans-serif;
margin-left: 30px;
margin-top: 30px;
text-transform: capitalize;
`
export const ContainerIcons = styled.div`
margin-top: 30px;
margin-right: 60px;
`
export const Icon = styled.span`
    color: #135846;
    font-size: xx-large;
    margin-left: 30px;
    &:hover{
       color: #E23428;
    }
`