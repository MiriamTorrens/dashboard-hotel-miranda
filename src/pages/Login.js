import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props){
    const {authenticated, setAuthenticated} = props;
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const myUser = {
        user: 'miriam',
        password: '1234'
    }
  
    const handleSubmit = (event) => {
        if (user === myUser.user && password === myUser.password){
            localStorage.setItem('authenticated', true);
            setAuthenticated(true);
            navigate('/dashboard', { replace: true });  
        }else{
            localStorage.removeItem('authenticated');
            setAuthenticated(false);
        } 
        event.preventDefault();
    }

    useEffect(() => {
        if(authenticated){
            navigate('/dashboard', { replace: true });  
        }
    }, []);

    return(
        <>
            <h1>Desde Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)}></input><br/>
                <input type="password"value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                <input type="submit" value="Submit"></input><br/>
            </form>
        </> 
    )
}