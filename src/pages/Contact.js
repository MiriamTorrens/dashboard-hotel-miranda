import { ContainerAll, SubContainer, ContainerHeader, Table} from "../styles/Styles";
import Contacts from '../components/Contacts';
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonArchive from "../components/ButtonArchive";
import { getContact, allContact, createContact, getThisContact, deleteContact} from "../redux/slices/contactSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdOutlineDeleteOutline } from 'react-icons/md';

export default function Contact(){
    const menuOptions = ["All Contacts", "Archived"];
    const selectOptions = ["Newest", "Guest"];
  
    const dispatch = useDispatch();
    const contactList = useSelector(allContact);

    useEffect(()=> {
        dispatch(getContact(allContact));
    }, [allContact])
    
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
            status:"NO"
        }));
    }

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
                        <th><IoMdAddCircleOutline style={{fontSize:30}} onClick={() => handleClick()}/></th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign: "top"}}>
                    {contactList.map(contact => (
                        <tr key={contact.id}>
                            <td onClick={() => {dispatch(getThisContact(contact)); console.log(contact)}}>{contact.id}<br/>{contact.date}</td>
                            <td>{contact.customer.fullName}<br/>{contact.customer.email}<br/>{contact.customer.phoneNumber}<br/></td>
                            <td style={{width:600}}>{contact.comment}</td>
                            <td><ButtonArchive/></td>
                            <td>
                                <MdOutlineDeleteOutline style={{fontSize:30}} onClick={() => dispatch(deleteContact(contact))}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination/>
        </SubContainer>
    </ContainerAll>
    )
}