import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  HeaderTab,
  Tab,
  MenuOPtions,
  InputText,
  SelectDiv,
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
import ModalViewNotes from "../components/ModalViewNotes";
import ModalNewBooking from "../components/ModalNewBooking";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingsList = useSelector(allBookings);
  const [bookingsState, setBookingsState] = useState([]);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const [open, setOpen] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  useEffect(() => {
    const orderKeys = {
      newest: "date",
      guest: "fullName",
      checkin: "checkin",
      checkout: "checkout",
    };
    const filteredBookings = bookingsList.filter((booking) =>
      booking.status.includes(filter)
    );
    const filteredSearchBookings = filteredBookings.filter((booking) =>
      booking.fullName.toLowerCase().includes(query.toLowerCase())
    );
    filteredSearchBookings.sort((a, b) => {
      if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else {
        return 0;
      }
    });
    setBookingsState(filteredSearchBookings);
  }, [bookingsList, filter, query, order]);

  const handleClickView = (id) => {
    setOpen(true);
    dispatch(getBooking(id));
  };

  const handleClickNew = () => {
    setOpenNew(true);
  };

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOPtions onClick={() => setFilter("")}>
                All Bookings
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("Check In")}>
                Check In
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("Check Out")}>
                Check Out
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("In Progress")}>
                In Progress
              </MenuOPtions>
            </Tab>
          </HeaderTab>
          <div>
            <ButtonNewBooking onClick={handleClickNew} />
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
          </div>
        </HeaderTableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Guest</th>
              <th>OrderDate</th>
              <th>CheckIn</th>
              <th>CheckOut</th>
              <th>Special Request</th>
              <th>Room Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingsState.map((booking) => (
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
                  <ButtonView onClick={() => handleClickView(booking.id)} />
                </td>
                <td>
                  {booking.roomInfo} - {booking.roomType}
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
      <ModalViewNotes open={open} handleClose={handleClose} />
      <ModalNewBooking open={openNew} handleClose={handleClose} />
    </AllWrapper>
  );
}
