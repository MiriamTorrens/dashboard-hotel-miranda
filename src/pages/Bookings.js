import { ContainerAll, SubContainer, HeaderTab, Tab, MenuOPtions, InputText, SelectDate, ContainerSelect, Select, ButtonView} from "../styles/Styles";
import { Table } from '../styles/TableStyles';
import { BookingsList } from '../JSON/BookingsList';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from "../components/Pagination";

export default function Bookings(){

    return(
        <ContainerAll>
            <SubContainer>
            <HeaderTab>
                <Tab>
                    <MenuOPtions>All Bookings</MenuOPtions>
                    <MenuOPtions>Pending</MenuOPtions>
                    <MenuOPtions>Booked</MenuOPtions>
                    <MenuOPtions>Canceled</MenuOPtions>
                    <MenuOPtions>Refund</MenuOPtions>
                </Tab>
                <InputText placeholder="Buscar por nombre cliente"></InputText>
                <ContainerSelect>
                <SelectDate>
                    <option>1 November 2020 - 30 November 2020</option>
                </SelectDate>
                    <Select>
                        <option value="newest">Newest</option>
                        <option value="guest">Guest</option>
                        <option value="checkin">Check In</option>
                        <option value="checkout">Chake Out</option>
                    </Select>
                </ContainerSelect>
            </HeaderTab>
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
                                <td><ButtonView>View Notes</ButtonView></td>
                                <td>{booking.roomType.type} - {booking.roomType.roomNumber}</td>
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