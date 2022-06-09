import { ContainerAll, SubContainer, ContainerHeader, Table} from "../styles/Styles";
import { NavLink } from 'react-router-dom';
import { RoomsList } from '../JSON/RoomsList';
import ButtonStatus from "../components/ButtonStatus";
import Header from "../components/Header";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from "../components/Pagination";
import ButtonNew from "../components/ButtonNew";
import Select from "../components/Select";

export default function Rooms(){
    const text = "Room";
    const menuOptions = ["All Rooms"]
    const selectOptions = ["Status", "Price <", "Price >"];
;    return(
        <ContainerAll>
            <SubContainer>
                <ContainerHeader>
                    <Header menuOptions={menuOptions} selectOptions={selectOptions}/>
                    <div>
                        <NavLink to="/rooms/newRoom"><ButtonNew text={text}/></NavLink>
                        <Select selectOptions={selectOptions}/>
                    </div>
                </ContainerHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Bed type</th>
                            <th>Facilities</th>
                            <th>Rate</th>
                            <th>Offer price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RoomsList.map(room => (
                            <tr key={room.idRoom}>
                                <td style={{width:150}}>
                                    <div style={{display:'flex'}}>
                                        <div style={{width:150, height:77, backgroundColor:'#C5C5C5', borderRadius:8}}></div> 
                                        <div style={{marginLeft:20, marginTop:8}}>{room.idRoom}<br/>{room.roomName}</div>
                                    </div>
                                </td>
                                <td>{room.roomType}</td>
                                <td>{room.amenities}</td>
                                <td>${room.price}</td>
                                <td>${(room.price-(room.price*room.discount/100)).toFixed(2)}</td>
                                <td><ButtonStatus status={room.status} color={room.status === "Available" ? 'rgb(90, 208, 122)' : 'rgb(226, 52, 40)'}/></td>
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