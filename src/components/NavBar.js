import {TbLayoutDashboard} from 'react-icons/tb';
import {AiOutlineKey} from 'react-icons/ai';
import {BsCalendarCheck} from 'react-icons/bs';
import {HiOutlineUser} from 'react-icons/hi';
import {HiOutlineMail} from 'react-icons/hi';
import {BsSuitHeartFill}from 'react-icons/bs';
import {AiOutlineCopyright}from 'react-icons/ai';
import {Container, Nav, DivLink, ContainerUser, ImgUser, ButtonContact, StyleIcons, UserName, UserEmail, Texts, StyledNavLink} from '../styles/NavBarStyles';
import {ContainerLogo, Logo, TextLogo, Title, Subtitle} from '../styles/LoginStyles';

export default function NavBar(props){
    const display = props.authenticated ?  'block' : 'none';
  
    return(
        <Container style={{display}}>
            <ContainerLogo style={{marginTop:20, marginLeft:0}}>
                <Logo/>
                <TextLogo>
                    <Title>travl</Title>
                    <Subtitle>Hotel Admin Dashboard</Subtitle>
                </TextLogo>
            </ContainerLogo>
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
                <UserName>Miriam Torrens</UserName><br/>
                <UserEmail>miriam_torrens@miranda.com</UserEmail><br/>
                <ButtonContact>Edit</ButtonContact>
            </ContainerUser>
            <Texts>
                <p style={{fontSize: 16, fontWeight:'bold', marginBottom:0}}>Travl Hotel Admin Dashboard</p>
                <p style={{fontSize: 14, color: '#799283', marginTop:0}}><AiOutlineCopyright/> 2022 All Rights Reserved</p>
                <p style={{fontSize: 14, color: '#799283', marginTop:30}}>Made with <BsSuitHeartFill/> by Miriam</p>
            </Texts>
        </Container>
    )
}