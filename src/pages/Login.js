import { useState } from 'react';
import { ContainerLogo } from '../styles/Styles';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { RiLockPasswordLine } from 'react-icons/ri';

export default function Login(props){
    const {setAuthenticated} = props;
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const myUser = {
        user: 'miriam',
        password: '1234'
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        user === myUser.user && password === myUser.password && setAuthenticated(true);
    }

    return(
        <>
        <ContainerLogo>
            <Logo/>
            <FormLogin handleSubmit={handleSubmit} suer={user} setUser={setUser} password={password} setPassword={setPassword}/>
        </ContainerLogo> 
        </>
    )
}