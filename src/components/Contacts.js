import styled from 'styled-components';
import { ContactList } from '../JSON/ContactList';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import { AiOutlineCheckCircle } from 'react-icons/ai';

const Container = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    width:95%;
    height: 400px;
    background-color: #FFFFFF;
    margin: 0 auto;
`
const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-left: 30px;   
`
const DivMsgs = styled.div`
    display: flex;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between; 
`
const DivMsg = styled.div`
    width: 32%;
    border: 1px solid #EBEBEB;
    border-radius: 20px; 
`
const DivMsgText = styled.div`
    margin: 20px;
`
const DivUser = styled.div`
    display: flex;
    margin: 20px;
`
const DivUserImg = styled.div`
    width: 65px;
    height: 65px;
    background-color: #C5C5C5;
    border-radius: 8px;
`
const UserText = styled.div`
    margin-left: 10px;
`
// const DivIcons = styled.div`
//    float: right;
// `
export default function Contacts(){
    return(
        <Container>
            <Title>Latest Review by Customers</Title>
            <DivMsgs>
            {ContactList.map(contact => (
                <DivMsg key={contact.idContact}>
                    <DivMsgText><b>{contact.subjetc}</b><br/>{contact.comment}</DivMsgText>
                    <DivUser>
                        <DivUserImg/>
                        <UserText>
                            <b><span>{contact.customer.fullName}</span><br/></b>
                            <span>{contact.customer.email}</span><br/>
                            <span>{contact.customer.phoneNumber}</span>
                            {/* <DivIcons>
                                <AiOutlineCloseCircle style={{color:'red', fontSize:'x-large'}}/>
                                <AiOutlineCheckCircle style={{color:'green', fontSize:'x-large'}}/>
                            </DivIcons> */}
                        </UserText>
                    </DivUser>
                </DivMsg>
            ))}
            </DivMsgs>
        </Container>
    )
}