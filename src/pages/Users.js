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
import { BsFillTelephoneFill } from "react-icons/bs";
import Pagination from "../components/Pagination";
import { ButtonNewEmployee } from "../components/Buttons";
import { getUsers, allUsers } from "../features/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalNewUser from "../components/ModalNewUser";

export default function Users() {
  const usersList = useSelector(allUsers);
  const [usersState, setUsersState] = useState([]);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("newest");
  const [query, setQuery] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const orderKeys = {
      newest: "start_date",
      name: "user_name",
    };
    const orderedFilterUsers = usersList.filter((user) =>
      user.user_name.toLowerCase().includes(query.toLowerCase())
    );
    orderedFilterUsers.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });
    setUsersState(orderedFilterUsers);
  }, [usersList, order, query]);

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOptions onClick={() => setUsersState(usersList)}>
                All Employee
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setUsersState(
                    usersList.filter((user) => user.status === true)
                  )
                }
              >
                Active Employee
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setUsersState(
                    usersList.filter((user) => user.status === false)
                  )
                }
              >
                Inactive Employee
              </MenuOptions>
            </Tab>
          </HeaderTab>
          <div>
            <ButtonNewEmployee onClick={handleOpen} />
            <SelectDiv value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="name">Name</option>
            </SelectDiv>
            <InputText
              placeholder="Search employee"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </HeaderTableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>Description</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {usersState.map((user) => (
              <tr key={user._id}>
                <td style={{ width: 250 }}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 77,
                        height: 77,
                        backgroundImage: `url(${user.user_image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 8,
                        marginLeft: 20,
                      }}
                    ></div>
                    <div style={{ marginLeft: 20, marginTop: 8 }}>
                      {user.user_name}
                      <br />
                      {user._id}
                      <br />
                      {user.user_email}
                    </div>
                  </div>
                </td>
                <td>{user.start_date}</td>
                <td>
                  {user.occupation === "room_service"
                    ? "room service"
                    : user.occupation}
                </td>
                <td>
                  <BsFillTelephoneFill /> {user.user_phone}
                </td>
                <td
                  style={{
                    color: user.status === true ? "#5AD07A" : "#E23428",
                  }}
                >
                  {user.status === true ? "ACTIVE" : "INACTIVE"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </SubWrapper>
      <ModalNewUser open={open} handleClose={handleClose} />
    </AllWrapper>
  );
}
