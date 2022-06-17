import { useContext, useState } from 'react';
import { AuthContext } from '../App';
import styled from 'styled-components';

const height = window.innerHeight;
const Container = styled.div`
    background-color:#F8F8F8; 
    padding: 5px;
    height: ${height}px;
    text-align: center;
`
const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #135846;
    margin-left: 10px;
    margin-top: 50px;
`
const Label = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #135846;
    margin-top: 20px;
    margin-left: 20px;
`
const ContainerForm = styled.div`
    width: 500px;
    height: 300px;
    margin: 0 auto;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    padding: 10px;
    text-align: left;
    line-height: 50px;
`
const Input = styled.input`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    border-radius: 8px;
    width: 300px;
    height: 30px;
    text-indent: 10px;
    margin-left: 30px;
    margin-right: 10px;
`
const InputSubmit = styled.input`
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    height: 35px;
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

export default function EditUser(){
    const { state, dispatch } = useContext(AuthContext);
    const [name, setName] = useState(state.name);
    const [email, setEmail] = useState(state.email)

    const handleSubmitName = (event) =>{
        event.preventDefault();
        dispatch({type:'changeName', name: name}); 
        dispatch({type:'changeName', name: name});    
    }
    const handleSubmitEmail = (event) =>{
        event.preventDefault();
        dispatch({type:'changeEmail', email:email});
        dispatch({type:'changeEmail', email:email});      
    }

    return(
        <Container>
            <Title>Edit User</Title>
            <ContainerForm>
            <form onSubmit={handleSubmitName}>
                <Label for="name">Edit Name:</Label>
                <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <InputSubmit type="submit" value="Change"/>
            </form>
            <form onSubmit={handleSubmitEmail}>
                <Label for="email">Edit Email:</Label>
                <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <InputSubmit type="submit" value="Change"/>
            </form>
            </ContainerForm>
        </Container>
    )
}