import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  SelectDiv,
  HeaderTab,
  Tab,
  MenuOptions,
} from "../styles/Styles";
import ButtonStatus from "../components/ButtonStatus";
import Pagination from "../components/Pagination";
import { getRooms, allRooms } from "../features/slices/roomsSlice";
// import { MdOutlineDeleteOutline, MdOutlineUpdate } from "react-icons/md";
// import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Rooms() {
  const dispatch = useDispatch();
  const roomsList = useSelector(allRooms);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOptions>All Rooms</MenuOptions>
            </Tab>
          </HeaderTab>
          <div>
            <SelectDiv>
              <option>Status</option>
              <option>Price Men.</option>
              <option>Price May.</option>
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
              {/* <th>
                <IoMdAddCircleOutline
                  style={{ fontSize: 30 }}
                  onClick={() => handleClick()}
                />
              </th> */}
            </tr>
          </thead>
          <tbody>
            {roomsList.map((room) => (
              <tr key={room._id}>
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
                      {room.room_number}
                    </div>
                  </div>
                </td>
                <td>
                  {room.bed_type === "single_bed"
                    ? "Single Bed"
                    : room.bed_type === "double_superior"
                    ? "Double Superior"
                    : room.bed_type === "double_bed"
                    ? "Double Bed"
                    : "Suite"}
                </td>
                <td>{room.amenities}</td>
                <td>${room.price}</td>
                <td>
                  $
                  {(room.price - (room.price * room.discount) / 100).toFixed(2)}
                </td>
                <td>
                  <ButtonStatus status={room.status}></ButtonStatus>
                </td>
                {/* <td>
                  <MdOutlineDeleteOutline
                    style={{ fontSize: 30 }}
                    onClick={() => dispatch(deleteRoom(room))}
                  />
                  <MdOutlineUpdate
                    style={{ fontSize: 30 }}
                    onClick={() =>
                      dispatch(updateRoom({ ...room, status: "Booked" }))
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
