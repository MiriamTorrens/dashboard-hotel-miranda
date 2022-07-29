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
import {
  getBookings,
  allBookings,
  getBooking,
} from "../features/slices/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalNewBooking from "../components/ModalNewBooking";
import ModalViewNotes from "../components/ModalViewNotes";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);
  const [bookingsState, setBookingsState] = useState([]);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenNotes(false);
  };

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  useEffect(() => {
    const orderKeys = {
      newest: "order_date",
      guest: "guest_name",
      checkin: "checkin",
      checkout: "checkout",
    };
    const orderedFilterBookings = bookingsList.filter((booking) =>
      booking.status.includes(filter)
    );
    const orderedFilterSearchBookings = orderedFilterBookings.filter(
      (booking) =>
        booking.guest_name.toLowerCase().includes(query.toLowerCase())
    );
    orderedFilterSearchBookings.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });
    setBookingsState(orderedFilterSearchBookings);
  }, [bookingsList, order, query, filter]);

  const handleClick = (id) => {
    setOpenNotes(true);
    dispatch(getBooking(id));
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
              <MenuOptions onClick={() => setFilter("checkin")}>
                Check In
              </MenuOptions>
              <MenuOptions onClick={() => setFilter("checkout")}>
                Check Out
              </MenuOptions>
              <MenuOptions onClick={() => setFilter("in_progress")}>
                In progress
              </MenuOptions>
            </Tab>
          </HeaderTab>
          <ButtonNewBooking onClick={handleOpen} />
          <SelectDiv value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="guest">Guest</option>
            <option value="checkin">Check In</option>
            <option value="checkout">Check Out</option>
          </SelectDiv>
          <InputText
            placeholder="Search Guest"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
                  <ButtonView onClick={() => handleClick(booking._id)} />
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
      <ModalViewNotes openNotes={openNotes} handleClose={handleClose} />
    </AllWrapper>
  );
}
