import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  SelectDiv,
  InputText,
  HeaderTab,
  Tab,
  MenuOptions,
} from "../styles/Styles";
import { ButtonView } from "../components/Buttons";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";
import { getBookings, allBookings } from "../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);
  const [bookingsState, setBookingsState] = useState(bookingsList);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBookings(bookingsState));
  }, [dispatch, bookingsState]);

  const handleChange = (query) => {
    setQuery(query);
    if (!query.length) {
      setBookingsState(bookingsList);
    } else {
      setBookingsState(
        bookingsState.filter((booking) =>
          booking.guest_name.toLowerCase().includes(query)
        )
      );
    }
  };

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOptions onClick={() => setBookingsState(bookingsList)}>
                All Bookings
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setBookingsState(
                    bookingsList.filter(
                      (booking) => booking.status === "checkin"
                    )
                  )
                }
              >
                Check In
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setBookingsState(
                    bookingsList.filter(
                      (booking) => booking.status === "checkout"
                    )
                  )
                }
              >
                Check Out
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setBookingsState(
                    bookingsList.filter(
                      (booking) => booking.status === "in_progress"
                    )
                  )
                }
              >
                In progress
              </MenuOptions>
            </Tab>
          </HeaderTab>
          <SelectDiv>
            <option>Newest</option>
            <option>Guest</option>
            <option>Check In</option>
            <option>Check Out</option>
          </SelectDiv>
          <InputText
            placeholder="Search Guest"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
          ></InputText>
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
            {bookingsState.map((booking) => (
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
