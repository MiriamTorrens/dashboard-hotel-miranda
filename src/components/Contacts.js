import styled from 'styled-components';
import { ContactList } from '../JSON/ContactList';

const Container = styled.div`
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    width:95%;
    height: 433px;
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
    width: 30%;
    border: 1px solid #EBEBEB;
    border-radius: 20px; 
`
export default function Contacts(){
    return(
        <Container>
            <Title>Latest Review by Customers</Title>
            <DivMsgs>
            {ContactList.map(contact => (
                <DivMsg key={contact.idContact}>
                    <div><b>{contact.subjetc}</b><br/>{contact.comment}</div>
                    <div style={{display:'flex'}}>
                        <div style={{width: 56, height: 56, backgroundColor:'#C5C5C5' }}></div>
                        <span>{contact.customer.fullName}<br/>{contact.customer.email}<br/>{contact.customer.phoneNumber}<br/></span>
                    </div>
                </DivMsg>
            ))}
            </DivMsgs>
        </Container>
    )
}