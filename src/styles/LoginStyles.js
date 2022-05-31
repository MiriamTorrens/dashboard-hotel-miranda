import styled from 'styled-components';
import logo from '../img/logo.png';

export const Container = styled.div`
    border-radius: 10px;
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    width: 15%; 
    margin-top: 100px;
    box-shadow: 0px 20px 30px #799283;
`
export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
`
export const TextLogo = styled.div`
    display:block;
    text-align: left;
`
export const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
    background-position: center;
    margin-top: 5px;
    width: 100px;
    height: 100px;
`
export const Title = styled.h1`
    margin-bottom:0;
    font-size: 40px;
    font-weight: 1000;
`
export const Subtitle = styled.p`
    margin-top:0;
    font: 12px Poppins;
    color: #135846;
`
export const Input = styled.input`
    border-radius: 8px;
    width: 50%;
    height: 30px;
    margin:10px;
    text-indent: 10px;
`
export const InputSubmit = styled.input`
    font: 600 16px Poppins;
    width: 158px;
    height: 47px;
    background: #ebf1ee;
    color: #135846;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    border: 1px solid #799283;
    &:hover{
        background: #799283;
        color: white;
    };
`