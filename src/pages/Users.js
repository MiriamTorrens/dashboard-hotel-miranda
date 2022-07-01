import { AllWrapper, SubWrapper, HeaderTableWrapper,Table } from "../styles/Styles";
import { BsFillTelephoneFill } from 'react-icons/bs';
import Pagination from "../components/Pagination.tsx";
import { NavLink } from "react-router-dom";
import {ButtonNewEmployee} from "../components/Buttons.tsx";
import Header from "../components/Header.tsx";
import Select from "../components/Select.tsx";
import InputText from "../components/InputText.tsx";
import { getUsers, allUsers, createUser, updateUser, deleteUser} from "../features/slices/usersSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { MdOutlineDeleteOutline, MdOutlineUpdate } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';

export default function Users(){
    const menuOptions = ["All Employee", "Active Employee", "Inactive Employee"];
    const selectOptions = ["Newest", "Guest"];
    const placeholder = "Search employee";
  
    const dispatch = useDispatch();
    const usersList = useSelector(allUsers);

    useEffect(()=> {
        dispatch(getUsers());
    }, [])
    
    const handleClick = () => {
        dispatch(createUser({
            fullName: "Lauren Abshire",
            id: "3bbee4c3-0074",
            email: "l.abshire@miranda.com",
            startDate: "2021-07-12",
            occupation: "Reception",
            description: "mollit duis nisi non deserunt",
            contact: "789-965-4830",
            status: "ACTIVE",
            photo: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
            password: "BPA8BOL3"
        }));
    }

    return (
      <AllWrapper>
        <SubWrapper>
          <HeaderTableWrapper>
            <Header menuOptions={menuOptions} />
            <InputText placeholder={placeholder} />
            <div>
              <NavLink to="/users/newUser">
                <ButtonNewEmployee />
              </NavLink>
              <Select selectOptions={selectOptions} />
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
                <th>
                  <IoMdAddCircleOutline
                    style={{ fontSize: 30 }}
                    onClick={() => handleClick()}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user) => (
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
                      color: user.status === "ACTIVE" ? "#5AD07A" : "#E23428",
                    }}
                  >
                    {user.status}
                  </td>
                  <td>
                    <MdOutlineDeleteOutline
                      style={{ fontSize: 30 }}
                      onClick={() => dispatch(deleteUser(user))}
                    />
                    <MdOutlineUpdate
                      style={{ fontSize: 30 }}
                      onClick={() =>
                        dispatch(updateUser({ ...user, status: "INACTIVE" }))
                      }
                    />
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