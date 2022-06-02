
import {BsArrowBarLeft} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {BiBell} from 'react-icons/bi';
import {TbLogout} from 'react-icons/tb';
import { useNavigate, useLocation } from 'react-router-dom';
import {ContainerMenu, Title, ContainerIcons, Icon} from '../styles/MenuSupStyles';

export default function MenuSup(props){
    const display = props.authenticated ?  'flex' : 'none';
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = location.pathname.substring(1);

    const handleClick = () => {
        console.log('has clickado');
    }  
    
    const Logout = () => {
        localStorage.removeItem('authenticated');
        props.setAuthenticated(false);
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