import {BsArrowBarLeft} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {BiBell} from 'react-icons/bi';
import {TbLogout} from 'react-icons/tb';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../App';
import { useContext } from 'react';

const ContainerMenu = styled.div`
display: flex;
justify-content: space-between;
box-shadow: 0px 3px 10px #00000005;
height: 100px;
width: 100%;
margin-left:30px;
`
const Title = styled.h1`
font-size: 28px;
font-weight: 600;
font-family: 'Poppins',sans-serif;
margin-left: 30px;
margin-top: 30px;
text-transform: capitalize;
`
const ContainerIcons = styled.div`
margin-top: 30px;
margin-right: 60px;
`
const Icon = styled.span`
    color: #135846;
    font-size: xx-large;
    margin-left: 30px;
    &:hover{
       color: #E23428;
    }
`

export default function MenuSup(){
    const { state, dispatch } = useContext(AuthContext);
    const display = state.authenticated ?  'flex' : 'none';
    const navigate = useNavigate();
    const location = useLocation();
    let currentLocation = location.pathname.substring(1);

    if(currentLocation === "users/newUser"){
        currentLocation = "Users";
    }else if(currentLocation === "users/editUser"){
        currentLocation = "Users";
    }else if(currentLocation === "rooms/newRoom"){
        currentLocation = "Rooms";
    }

    const handleClick = () => {
        console.log('click');
    }  
    
    const Logout = () => {
        dispatch({type:'logout'});
        navigate('/login', { replace: true }); 
    }
    
    return(
        <ContainerMenu style={{display}}>
            <div style={{display:'flex'}}>
            <BsArrowBarLeft style={{marginTop:35, marginLeft: 15, fontSize: 'xx-large'}} onClick={()=> handleClick()}/>
            <Title>{currentLocation}</Title>
            </div>
            <ContainerIcons>
                <Icon><HiOutlineMail/></Icon>
                <Icon><BiBell/></Icon>
                <Icon><TbLogout onClick = {() => Logout()}/></Icon>
            </ContainerIcons>
        </ContainerMenu>
    )
}