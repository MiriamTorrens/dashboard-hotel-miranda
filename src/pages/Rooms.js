import { ContainerAll, SubContainer, HeaderTab, Tab, MenuOPtions, ContainerSelect, Select, ButtonNew} from "../styles/Styles";
import { Table} from '../styles/TableStyles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RoomsList } from '../JSON/RoomsList';
import Pagination from "../components/Pagination";

export default function Rooms(){
 
    return(
        <ContainerAll>
            <SubContainer>
                <HeaderTab>
                    <Tab>
                        <MenuOPtions>All Rooms</MenuOPtions>
                    </Tab>
                    <ContainerSelect>
                        <ButtonNew>+ New Room </ButtonNew>
                        <Select>
                            <option value="status">Status</option>
                            <option value="priceMenor">Price -+</option>
                            <option value="priceMayor">Price +-</option>
                        </Select>
                    </ContainerSelect>
                </HeaderTab>

                <Table> 
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Bed Type</th>
                            <th>Facilities</th>
                            <th>Rate</th>
                            <th>Offer Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RoomsList.map(room => (
                            <tr key={room.idRoom}>
                                <td style={{width:150}}>
                                    <div style={{display:'flex'}}>
                                        <div style={{width:150, height:77, backgroundColor:'#C5C5C5', borderRadius:8, marginLeft: 20}}></div> 
                                        <div style={{marginLeft:20, marginTop:8}}>{room.idRoom}<br/>{room.roomName}</div>
                                    </div>
                                </td>
                                <td>{room.roomType}</td>
                                <td>{room.amenities}</td>
                                <td>${room.price}</td>
                                <td>${room.price-(room.price*room.discount%100).toFixed(2)}</td>
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