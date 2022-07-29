import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  HeaderTab,
  Tab,
  MenuOPtions,
  SelectDiv,
} from "../styles/Styles";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import { getRooms, allRooms } from "../features/slices/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Rooms() {
  const selectOptions = ["Status", "Price <", "Price >"];

  const dispatch = useDispatch();
  const roomsList = useSelector(allRooms);
  const [roomsState, setRoomsState] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("roomNumber");

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  useEffect(() => {
    const orderKeys = {
      roomNumber: "roomNumber",
      "price <": "price",
    };
    const orderedFilterRooms = roomsList.filter((room) =>
      room.status.includes(filter)
    );
    orderedFilterRooms.sort((a, b) => {
      if (order === "price >") {
        if (a.order > b.order) {
          return 1;
        } else if (a.order < b.order) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a[orderKeys[order]] > b[orderKeys[order]]) {
          return 1;
        } else if (a[orderKeys[order]] < b[orderKeys[order]]) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    setRoomsState(orderedFilterRooms);
  }, [roomsList, filter, order]);

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOPtions onClick={() => setFilter("")}>All Rooms</MenuOPtions>
              <MenuOPtions onClick={() => setFilter("Available")}>
                Available Rooms
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("Booked")}>
                Booked Rooms
              </MenuOPtions>
            </Tab>
          </HeaderTab>
          <div>
            <SelectDiv value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="roomNumber">Room Number</option>
              <option value="price <">Price -</option>
              <option value="price >">Price +</option>
            </SelectDiv>
          </div>
        </HeaderTableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Bed type</th>
              <th>Facilities</th>
              <th>Rate</th>
              <th>Offer price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {roomsState.map((room) => (
              <tr key={room.id}>
                <td style={{ width: 150 }}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 150,
                        height: 77,
                        backgroundImage: `url(${room.images[0]})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 8,
                      }}
                    ></div>
                    <div style={{ marginLeft: 20, marginTop: 8 }}>
                      {room.idRoom}
                      <br />
                      {room.roomNumber}
                    </div>
                  </div>
                </td>
                <td>{room.roomType}</td>
                <td>{room.amenities}</td>
                <td>${room.price}</td>
                <td>
                  $
                  {(room.price - (room.price * room.discount) / 100).toFixed(2)}
                </td>
                <td>
                  <ButtonStatus status={room.status}></ButtonStatus>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </SubWrapper>
    </AllWrapper>
  );
}
