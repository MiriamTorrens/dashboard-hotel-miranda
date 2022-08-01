import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  HeaderTab,
  Tab,
  MenuOPtions,
  SelectDiv,
  InputText,
} from "../styles/Styles";
import { BsFillTelephoneFill } from "react-icons/bs";
import Pagination from "../components/Pagination";
import { ButtonNewEmployee } from "../components/Buttons";
import { getUsers, allUsers } from "../features/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Users() {
  const dispatch = useDispatch();
  const usersList = useSelector(allUsers);
  const [usersState, setUsersState] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("newest");
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const keysOrder = {
      newest: "startDate",
      guest: "fullName",
    };
    const filteredOrderUsers = usersList.filter((user) =>
      user.status.includes(filter)
    );
    const filteredOrderSearchUsers = filteredOrderUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );
    filteredOrderSearchUsers.sort((a, b) => {
      if (a[keysOrder[order]] > b[keysOrder[order]]) {
        return 1;
      } else if (a[keysOrder[order]] < b[keysOrder[order]]) {
        return -1;
      } else {
        return 0;
      }
    });
    setUsersState(filteredOrderSearchUsers);
  }, [usersList, filter, order, query]);

  return (
    <AllWrapper>
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOPtions onClick={() => setFilter("")}>
                All Employee
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("true")}>
                Active Employee
              </MenuOPtions>
              <MenuOPtions onClick={() => setFilter("false")}>
                Inactive Employee
              </MenuOPtions>
            </Tab>
          </HeaderTab>
          <div>
            <ButtonNewEmployee />
            <SelectDiv value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="guest">Guest</option>
            </SelectDiv>
            <InputText
              placeholder="Search Employee"
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
              <tr key={user.id}>
                <td style={{ width: 250 }}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 77,
                        height: 77,
                        backgroundImage: `url(${user.photo})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 8,
                        marginLeft: 20,
                      }}
                    ></div>
                    <div style={{ marginLeft: 20, marginTop: 8 }}>
                      {user.fullName}
                      <br />
                      {user.id}
                      <br />
                      {user.email}
                    </div>
                  </div>
                </td>
                <td>{user.startDate}</td>
                <td>{user.occupation}</td>
                <td>
                  <BsFillTelephoneFill /> {user.contact}
                </td>
                <td
                  style={{
                    color: user.status === "true" ? "#5AD07A" : "#E23428",
                  }}
                >
                  {user.status === "true" ? "ACTIVE" : "INACTIVE"}
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
