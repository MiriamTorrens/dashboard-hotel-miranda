import { ContainerAll, SubContainer, HeaderTab, Tab, MenuOPtions, InputText,ContainerSelect, Select, ButtonNew } from "../styles/Styles";
import { Table} from '../styles/TableStyles';
import { UsersList } from '../JSON/UsersList';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Pagination from "../components/Pagination";

export default function Users(){
    return(
        <ContainerAll>
        <SubContainer>
            <HeaderTab>
                <Tab>
                    <MenuOPtions>All Employee</MenuOPtions>
                    <MenuOPtions>Active Employee</MenuOPtions>
                    <MenuOPtions>Inactive Employee</MenuOPtions>
                </Tab>
                <InputText placeholder="Buscar empleado"/>
                <ContainerSelect>
                    <ButtonNew>+ New Employee</ButtonNew>
                    <Select>
                        <option value="status">Newest</option>
                        <option value="priceMenor">Guest</option>
                    </Select>
                </ContainerSelect>
            </HeaderTab>
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
                            <td>Estado</td>
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