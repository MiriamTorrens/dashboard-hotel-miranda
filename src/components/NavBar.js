import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
import user from '../img/user.png';

export const Container = styled.div`
  width: 350px;
  height:1812px;
  background-color: white;
  border-left:1px solid black;
`
export const ContainerLogo = styled.div`
    display: flex;
    margin-top: 40px;
    margin-left:46px;
`
export const TextLogo = styled.div`
    display:block;
    text-align: left;
    margin-left:8px;
`
export const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
    background-position: center;
    width: 80px;
    height: 80px;
`
export const Title = styled.h1`
    margin-bottom:0;
    font-size: 30px;
    font-weight: 1000;
`
export const Subtitle = styled.p`
    margin-top:0;
    font: 12px Poppins;
    color: #135846;
`
export const Nav = styled.nav`
    margin-top: 83px;
`
export const Style = {
    textDecoration: 'none',
}
export const DivLink = styled.div`
    width: 100%;
    height: 67px;
    margin-bottom: 15px;
`
export const Link = styled.span`
    color: #799283;
    font: 18px Poppins;
    margin-left: 107px;
    &:hover{
        color: #E23428;
    }
`
export const ContainerUser = styled.div`
    width: 233px;
    height: 221px;
    margin-left:46px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    text-align: center;
`
export const ImgUser = styled.div`
    background-image: url(${user});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
    background-position: center;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    background-color: #C5C5C5;
    border-radius: 8px;
`
export const ButtonContact = styled.button`
    font: 600 14px Poppins;
    width: 158px;
    height: 47px;
    background: #ebf1ee;
    color: #135846;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
`

export default function NavBar(props){
    const display = props.authenticated ?  'block' : 'none';

    return(
        <Container style={{display}}>
            <ContainerLogo>
                <Logo/>
                <TextLogo>
                    <Title>travl</Title>
                    <Subtitle>Hotel Admin Dashboard</Subtitle>
                </TextLogo>
            </ContainerLogo>
            <Nav>
                <DivLink>
                    <NavLink to="/dashboard" style={Style}><Link>Dashboard</Link></NavLink>
                </DivLink>
                <DivLink>
                    <NavLink to="/bookings" style={Style}><Link>Bookings</Link></NavLink>
                </DivLink>
                <DivLink>
                    <NavLink to="/rooms" style={Style}><Link>Rooms</Link></NavLink>
                </DivLink>
                <DivLink>
                    <NavLink to="/contact" style={Style}><Link>Contact</Link></NavLink>
                </DivLink>
                <DivLink>
                    <NavLink to="/users" style={Style}><Link>Users</Link></NavLink>
                </DivLink>
            </Nav>
            <ContainerUser>
                <ImgUser/>
                <span>Nombre Apellido</span><br/>
                <span>Correo</span><br/>
                <ButtonContact>Contact Us</ButtonContact>
            </ContainerUser>
        </Container>
    )
}