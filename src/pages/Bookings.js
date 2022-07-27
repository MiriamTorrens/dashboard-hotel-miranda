import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
} from "../styles/Styles";
import Header from "../components/Header";
import Select from "../components/Select";
import InputText from "../components/InputText";
import { ButtonView } from "../components/Buttons";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";
import {
  getBookings,
  allBookings,
  // createBooking,
  // updateBooking,
  // deleteBooking,
} from "../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { MdOutlineDeleteOutline, MdOutlineUpdate } from "react-icons/md";
// import { IoMdAddCircleOutline } from "react-icons/io";

export default function Bookings() {
  const menuOptions = ["All Bookings", "Check In", "Check Out", "In Progress"];
  const selectOptions = ["Newest", "Guest", "Check In", "Check Out"];
  const placeholder = "Search guest";

  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <Header menuOptions={menuOptions} selectOptions={selectOptions} />
          <Select selectOptions={selectOptions} />
          <InputText placeholder={placeholder}></InputText>
        </HeaderTableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Guest</th>
              <th>Order Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Special Request</th>
              {/* <th>Room Type</th> */}
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingsList.map((booking) => (
              <tr key={booking._id}>
                <td>
                  {booking.guest_name}
                  <br />
                  {booking._id}
                </td>
                <td>{booking.order_date}</td>
                <td>{booking.checkin}</td>
                <td>{booking.checkout}</td>
                <td>
                  <ButtonView />
                </td>
                {/* <td>
                  {booking.roomType.type} - {booking.roomType.roomNumber}
                </td> */}
                <td>
                  <ButtonStatus status={booking.status}></ButtonStatus>
                </td>
                {/* <td>
                  <MdOutlineDeleteOutline
                    style={{ fontSize: 30 }}
                    onClick={() => dispatch(deleteBooking(booking))}
                  />
                  <MdOutlineUpdate
                    style={{ fontSize: 30 }}
                    onClick={() =>
                      dispatch(
                        updateBooking({ ...booking, status: "Check Out" })
                      )
                    }
                  />
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </SubWrapper>
    </AllWrapper>
  );
}
