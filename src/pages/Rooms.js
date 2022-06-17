import { ContainerAll, SubContainer, ContainerHeader, Table} from "../styles/Styles";
import { NavLink } from 'react-router-dom';
import ButtonStatus from "../components/ButtonStatus";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import ButtonNew from "../components/ButtonNew";
import Select from "../components/Select";
import { getRooms, allRooms, createRoom, updateRoom, deleteRoom } from "../redux/slices/roomsSlice";
import { MdOutlineDeleteOutline, MdOutlineUpdate } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export default function Rooms(){
    const text = "Room";
    const menuOptions = ["All Rooms"]
    const selectOptions = ["Status", "Price <", "Price >"];
 
    const dispatch = useDispatch();
    const roomsList = useSelector(allRooms);

    useEffect(()=> {
        dispatch(getRooms(allRooms));
    }, [allRooms])

    const handleClick = () => {
        dispatch(createRoom({
            id: "8e8e7c2f-9706",
            images: [
                "https://d2wiks2irojx7z.cloudfront.net/cache/img/hotel-marais-bastille-chambre-30813-1600-900-auto.jpeg?q=1528112600",
                "https://d2wiks2irojx7z.cloudfront.net/cache/img/hotel-marais-bastille-chambre-30807-1600-900-auto.jpeg?q=1528112601",
                "https://d2wiks2irojx7z.cloudfront.net/cache/img/hotel-marais-bastille-chambre-30819-1600-900-auto.jpeg?q=1528112602",
                "https://d2wiks2irojx7z.cloudfront.net/cache/img/hotel-marais-bastille-chambre-30831-1600-900-auto.jpeg?q=1528112603"
            ],
            roomType: "Single bed",
            roomNumber: 40,
            offer: false,
            price: 78,
            discount: 15,
            cancellation: "",
            amenities: ["AC", "Shower", "Single Bed", "Towel", "Bathup", "Coffe Set", "LED TV", "WiFi"],
            status: "Available",
            roomName: "New Room"
        }));
    }

    return(
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
                            <th><IoMdAddCircleOutline style={{fontSize:30}} onClick={() => handleClick()}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {roomsList.map(room => (
                            <tr key={room.id}>
                                <td style={{width:150}}>
                                    <div style={{display:'flex'}}>
                                        <div style={{width:150, height:77, backgroundImage:`url(${room.images[0]})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", borderRadius:8}}></div> 
                                        <div style={{marginLeft:20, marginTop:8}}>{room.idRoom}<br/>{room.roomName}</div>
                                    </div>
                                </td>
                                <td>{room.roomType}</td>
                                <td>{room.amenities}</td>
                                <td>${room.price}</td>
                                <td>${(room.price-(room.price*room.discount/100)).toFixed(2)}</td>
                                <td><ButtonStatus status={room.status}></ButtonStatus></td>
                                <td>
                                    <MdOutlineDeleteOutline style={{fontSize:30}} onClick={() => dispatch(deleteRoom(room))}/>
                                    <MdOutlineUpdate style={{fontSize:30}} onClick={() => dispatch(updateRoom({...room, status: "Booked"}))}/>
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