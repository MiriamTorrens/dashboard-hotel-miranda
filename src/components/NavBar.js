import {TbLayoutDashboard} from 'react-icons/tb';
import {AiOutlineKey} from 'react-icons/ai';
import {BsCalendarCheck} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import {HiOutlineMail} from 'react-icons/hi';
import {BsSuitHeartFill}from 'react-icons/bs';
import {AiOutlineCopyright}from 'react-icons/ai';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import user from '../img/user.png';
import { AuthContext } from '../App';
import { useContext } from 'react';

const Container = styled.div`
  width: 350px;
  background-color: white;
  margin-top: 30px;
`
const Nav = styled.nav`
    margin-top: 40px;
`
const DivLink = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 67px;
    margin-bottom: 10px;
    border-left: 5px solid white;
    color: #799283;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    &:hover{
        color: #E23428;
        border-left: 5px solid #E23428;
        a:visited{
            color:red;
        }
    }

`
const StyledNavLink = styled(NavLink)`
    font-size: 18px;
    margin-left: 20px;
    text-decoration: none;
    color: #799283;
    margin-top: 5;
`
const ContainerUser = styled.div`
    width: 233px;
    height: 221px;
    margin-left:46px;
    margin-top: 50px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    text-align: center;
`
const ImgUser = styled.div`
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
    margin-bottom: 10px;
`
const ButtonContact = styled.button`
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    width: 158px;
    height: 47px;
    background: #ebf1ee;
    color: #135846;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    &:hover{
        filter: brightness(0.97);
    };
`
const UserName = styled.span`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`
const UserEmail = styled.span`
    font-size: 12px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
`
const Texts = styled.div`
    width: 260px;
    margin-left: 50px;
    margin-top: 55px;
    font-family: 'Poppins', sans-serif;
`
const StyleIcons = {
    marginLeft: 63,
    fontSize: 'xx-large'
}
const Admin = styled.p`
    font-size: 16;
    font-weight: bold;
    margin-bottom: 0px;
`
const Copyright = styled.p`
    font: 14px;
    color: #799283;
    margin-top: 30px;
`
export default function NavBar(){
    const { state } = useContext(AuthContext);
    const display = state.authenticated ?  'block' : 'none';
  
    return(
        <Container style={{display}}>
            <Logo/>
            <Nav>
                <DivLink>
                    <TbLayoutDashboard style={StyleIcons}/>
                    <StyledNavLink to="/dashboard" >Dashboard</StyledNavLink>
                </DivLink>
                <DivLink>
                    <AiOutlineKey style={StyleIcons}/>
                    <StyledNavLink to="/rooms">Rooms</StyledNavLink>
                </DivLink>
                <DivLink>
                    <BsCalendarCheck style={{fontSize:'x-large', marginLeft: 63}}/>
                    <StyledNavLink to="/bookings">Bookings</StyledNavLink>
                </DivLink>
                <DivLink>
                    <HiOutlineUser style={StyleIcons}/>
                    <StyledNavLink to="/users">Users</StyledNavLink>
                </DivLink>
                <DivLink>
                    <HiOutlineMail style={StyleIcons}/>
                    <StyledNavLink to="/contact">Contact</StyledNavLink>
                </DivLink>
            </Nav>
            <ContainerUser>
                <ImgUser/>
                <UserName>{state.name}</UserName><br/>
                <UserEmail>{state.email}</UserEmail><br/>
                <NavLink to="/users/editUser"><ButtonContact>Edit</ButtonContact></NavLink>
            </ContainerUser>
            <Texts>
                <Admin>Travl Hotel Admin Dashboard</Admin>
                <Copyright><AiOutlineCopyright/> 2022 All Rights Reserved</Copyright>
                <Copyright>Made with <BsSuitHeartFill/> by Miriam</Copyright>
            </Texts>
        </Container>
    )
}