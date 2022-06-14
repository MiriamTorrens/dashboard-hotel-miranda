import { ContainerAll, SubContainer, ContainerHeader, SelectDate, Table} from "../styles/Styles";
import { BookingsList } from '../JSON/BookingsList';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Header from "../components/Header";
import Select from "../components/Select";
import InputText from "../components/InputText";
import ButtonView from "../components/ButtonView";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";

export default function Bookings(){
    const menuOptions = ["All Bookings", "Pending", "Booked", "Canceled", "Refund"];
    const selectOptions = ["Newest", "Guest", "Check In", "Check Out"];
    const placeholder = "Search guest";
    
    return(
        <ContainerAll>
            <SubContainer>
                <ContainerHeader>
                        <Header menuOptions={menuOptions} selectOptions={selectOptions}/>
                        <InputText placeholder={placeholder}></InputText>
                        <div>
                            <SelectDate>
                                <option>1 November 2020 - 30 November 2020</option>
                            </SelectDate>
                            <Select selectOptions={selectOptions}/>
                        </div>
                </ContainerHeader>
                <Table>
                    <thead>
                        <tr>
                            <th>Guest</th>
                            <th>Order Date</th>
                            <th>Check in</th>
                            <th>Check out</th>
                            <th>Special Request</th>
                            <th>Room Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BookingsList.map(booking => (
                            <tr key={booking.idBooking}>
                                <td>{booking.fullName}<br/>{booking.idBooking}</td>
                                <td>{booking.date}</td>
                                <td>{booking.checkin}</td>
                                <td>{booking.checkout}</td>
                                <td><ButtonView/></td>
                                <td>{booking.roomType.type} - {booking.roomType.roomNumber}</td>
                                <td><ButtonStatus status={booking.status}></ButtonStatus></td>
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