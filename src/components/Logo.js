import styled from 'styled-components';
import logo from '../img/logo.png';

const ContainerLogo = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`
const TextLogo = styled.div`
display:block;
text-align: left;
`
const LogoImage = styled.div`
background-image: url(${logo});
background-repeat: no-repeat;
background-size: cover;
background-size: 100% 100%;
background-position: center;
margin-top: 5px;
width: 100px;
height: 100px;
`
const Title = styled.h1`
margin-bottom:0;
font-size: 40px;
font-weight: 1000;
`
const Subtitle = styled.p`
margin-top:0;
font-size: 12px;
font-family: 'Poppins', sans-serif;
color: #135846;
`

export default function Logo(){
    return(
        <ContainerLogo>
            <LogoImage/>
            <TextLogo>
                <Title>travl</Title>
                <Subtitle>Hotel Admin Dashboard</Subtitle>
            </TextLogo>
        </ContainerLogo>
    )
}