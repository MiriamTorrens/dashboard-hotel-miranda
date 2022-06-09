import { ContainerAll, SubContainer, ContainerHeader,Table } from "../styles/Styles";
import { UsersList } from '../JSON/UsersList';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Pagination from "../components/Pagination";
import { NavLink } from "react-router-dom";
import ButtonNew from "../components/ButtonNew";
import Header from "../components/Header";
import Select from "../components/Select";
import InputText from "../components/InputText";

export default function Users(){
    const menuOptions = ["All Employee", "Active Employee", "Inactive Employee"];
    const selectOptions = ["Newest", "Guest"];
    const text = "Employee";
    const placeholder = "Search employee";
    return(
        <ContainerAll>
        <SubContainer>
            <ContainerHeader>
                <Header menuOptions={menuOptions}/>
                <InputText placeholder={placeholder}/>
                <div>
                    <NavLink to="/users/newUser"><ButtonNew text={text}/></NavLink>
                    <Select selectOptions={selectOptions}/>
                </div>
            </ContainerHeader>
            <Table> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>Description</th>
                        <th>Contact</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersList.map(user => (
                        <tr key={user.idUser}>
                            <td style={{width:250}}>
                                <div style={{display:'flex'}}>
                                    <div style={{width:77, height:77, backgroundColor:'#C5C5C5', borderRadius:8, marginLeft: 20}}></div> 
                                    <div style={{marginLeft:20, marginTop:8}}>{user.fullName}<br/>{user.idUser}<br/>{user.email}</div>
                                    
                                </div>
                            </td>
                            <td>{user.startDate}</td>
                            <td>{user.occupation}</td>
                            <td><BsFillTelephoneFill/> {user.contact}</td>
                            <td style={{color:user.status === 'ACTIVE' ? '#5AD07A' : '#E23428'}}>{user.status}</td>
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