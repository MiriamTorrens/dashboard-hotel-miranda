import { ContainerAll, SubContainer, ContainerHeader, Table} from "../styles/Styles";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ContactList } from '../JSON/ContactList';
import Contacts from '../components/Contacts';
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonArchive from "../components/ButtonArchive";

export default function Contact(){
    const menuOptions = ["All Contacts", "Archivated"];
    const selectOptions = ["Newest", "Guest"];
    return(
        <ContainerAll>
        <Contacts></Contacts>
        <SubContainer>
            <ContainerHeader>
              <Header menuOptions={menuOptions}/>
              <Select selectOptions={selectOptions}/>
            </ContainerHeader>
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
                            <td >{contact.idContact}<br/>{contact.date}</td>
                            <td>{contact.customer.fullName}<br/>{contact.customer.email}<br/>{contact.customer.phoneNumber}<br/></td>
                            <td style={{width:600}}><b>{contact.subjetc}</b><br/>{contact.comment}</td>
                            <td><ButtonArchive/></td>
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