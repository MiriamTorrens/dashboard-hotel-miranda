import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  SelectDate,
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
  createBooking,
  updateBooking,
  deleteBooking,
} from "../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdOutlineDeleteOutline, MdOutlineUpdate } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Bookings() {
  const menuOptions = ["All Bookings", "Check In", "Check Out", "In Progress"];
  const selectOptions = ["Newest", "Guest", "Check In", "Check Out"];
  const placeholder = "Search guest";

  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  const handleClick = () => {
    dispatch(
      createBooking({
        fullName: "Lauren Abshire",
        id: "3bbee4c3-0074",
        checkin: "2021-12-11",
        checkout: "2021-07-06",
        roomInfo: 21,
        price: 80,
        specialRequest: "minim eiusmod amet id duis id",
        amenities: {},
        images: [],
        roomType: {
          type: "MAFRQAQU",
          roomNumber: 21,
        },
        roomDescription: "velit nulla ea velit exercitation consectetur",
        status: "In Progress",
      })
    );
  };

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <Header menuOptions={menuOptions} selectOptions={selectOptions} />
          <div>
            <SelectDate>
              <option>1 November 2020 - 30 November 2020</option>
            </SelectDate>
            <Select selectOptions={selectOptions} />
          </div>
        </HeaderTableWrapper>
        <InputText placeholder={placeholder}></InputText>
        <Table>
          <thead>
            <tr>
              <th>Guest</th>
              <th>OrderDate</th>
              <th>CheckIn</th>
              <th>CheckOut</th>
              <th>Special Request</th>
              <th>Room Type</th>
              <th>Status</th>
              {/* <th>
                <IoMdAddCircleOutline
                  style={{ fontSize: 30 }}
                  onClick={() => handleClick()}
                />
              </th> */}
            </tr>
          </thead>
          <tbody>
            {bookingsList.map((booking) => (
              <tr key={booking.id}>
                <td>
                  {booking.fullName}
                  <br />
                  {booking.id}
                </td>
                <td>{booking.date}</td>
                <td>{booking.checkin}</td>
                <td>{booking.checkout}</td>
                <td>
                  <ButtonView />
                </td>
                <td>
                  {booking.roomType.type} - {booking.roomType.roomNumber}
                </td>
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
