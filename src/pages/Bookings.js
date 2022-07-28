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
import { ButtonView, ButtonNewBooking } from "../components/Buttons";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";
import { getBookings, allBookings } from "../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalNewBooking from "../components/ModalNewBooking";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);
  const [bookingsState, setBookingsState] = useState([]);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  useEffect(() => {
    setBookingsState(bookingsList);
  }, [bookingsList]);

  const handleChange = (query) => {
    setQuery(query);
    if (!query.length) {
      setBookingsState(bookingsList);
    } else {
      setBookingsState(
        bookingsState.filter((booking) =>
          booking.guest_name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleChangeOrder = (order) => {
    setOrder(order);
    const orderKeys = {
      newest: "order_date",
      guest: "guest_name",
      checkin: "checkin",
      checkout: "checkout",
    };
    const sortedBookings = [...bookingsState];
    sortedBookings.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });
    setBookingsState(sortedBookings);
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
          <ButtonNewBooking onClick={handleOpen} />
          <SelectDiv
            value={order}
            onChange={(e) => handleChangeOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="guest">Guest</option>
            <option value="checkin">Check In</option>
            <option value="checkout">Check Out</option>
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
                <td>
                  <ButtonStatus status={booking.status}></ButtonStatus>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </SubWrapper>
      <ModalNewBooking open={open} handleClose={handleClose} />
    </AllWrapper>
  );
}
