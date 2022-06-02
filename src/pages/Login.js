import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerLogo, Logo, TextLogo, Title, Subtitle, Input, InputSubmit} from '../styles/LoginStyles';

export default function Login(props){
    const {setAuthenticated} = props;
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const myUser = {
        user: 'miriam',
        password: '1234'
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (user === myUser.user && password === myUser.password){
            localStorage.setItem('authenticated', true);
            setAuthenticated(true);
            navigate('/dashboard', { replace: true });  
        }else{
            localStorage.removeItem('authenticated');
            setAuthenticated(false);
        }   
    }

    return(
        <>
        <Container>
            <ContainerLogo>
                <Logo/>
                <TextLogo>
                    <Title>travl</Title>
                    <Subtitle>Hotel Admin Dashboard</Subtitle>
                </TextLogo>
            </ContainerLogo>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="User"></Input><br/>
                <Input type="password"value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></Input><br/>
                <InputSubmit type="submit" value="Login"/>
            </form>
        </Container> 
        </>
    )
}