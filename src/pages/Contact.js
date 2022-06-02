import { ContainerAll, SubContainer, HeaderTab, Tab, MenuOPtions, ContainerSelect, Select} from "../styles/Styles";
import { Table } from '../styles/TableStyles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ContactList } from '../JSON/ContactList';
import Contacts from '../components/Contacts';
import Pagination from "../components/Pagination";

export default function Contact(){
    return(
        <ContainerAll>
        <Contacts></Contacts>
        <SubContainer>
            <HeaderTab>
                <Tab>
                    <MenuOPtions>All Contacts</MenuOPtions>
                    <MenuOPtions>Archivated</MenuOPtions>
                </Tab>
                <ContainerSelect>
                    <Select>
                        <option value="status">Newest</option>
                        <option value="priceMenor">Guest</option>
                    </Select>
                </ContainerSelect>
            </HeaderTab>
            <Table> 
                <thead>
                    <tr>
                        <th>ID / Date</th>
                        <th>Customer</th>
                        <th>Comment</th>
                        <th>Archive</th>
                    </tr>
                </thead>
                <tbody>
                    {ContactList.map(contact => (
                        <tr key={contact.idContact}>
                            <td >{contact.idContact}<br/>{contact.date}</td>{/*falta hora*/}
                            <td>{contact.customer.fullName}<br/>{contact.customer.email}<br/>{contact.customer.phoneNumber}<br/></td>
                            <td style={{width:600}}><b>{contact.subjetc}</b><br/>{contact.comment}</td>
                            <td><button>Archive</button></td>
                            <td><BsThreeDotsVertical/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination/>
        </SubContainer>
    </ContainerAll>
    )
}