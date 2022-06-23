import { ContainerAll, SubContainer, ContainerHeader, Table} from "../styles/Styles";
import ContactsDiv from '../components/ContactsDiv';
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonArchive from "../components/ButtonArchive";
import { getContact, allContact, createContact,} from "../features/slices/contactSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export default function Contact(){
    const menuOptions = ["All Contacts", "Archived"];
    const selectOptions = ["Newest", "Guest"];
  
    const dispatch = useDispatch();
    const contactList = useSelector(allContact);

    useEffect(()=> {
        dispatch(getContact());
    }, [])
    
    const handleClick = () => {
        dispatch(createContact({
            id: "8e8e7c2f-9506",
            customer: {
                fullName: "Guy Aufderhar",
                email: "Dominique76@yahoo.com",
                phoneNumber: "819-821-4559"
            },
            subject: "et ipsum fugiat pariatur",
            comment:"cillum minim elit officia ea esse ipsum in consequat do ea ex magna amet exercitation occaecat elit tempor eu laborum mollit enim cillum culpa mollit excepteur id velit proident anim aliquip adipisicing magna amet nostrud velit irure ipsum veniam",
            viewed:"NO",
            archived: "NO"
        }));
    }

    return(
        <ContainerAll>
        <ContactsDiv/>
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
                <tbody style={{verticalAlign: "top"}}>
                    {contactList.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.id}<br/>{contact.date}</td>
                            <td>{contact.customer.fullName}<br/>{contact.customer.email}<br/>{contact.customer.phoneNumber}<br/></td>
                            <td style={{width:600}}>{contact.comment}</td>
                            <td><ButtonArchive/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination/>
        </SubContainer>
    </ContainerAll>
    )
}