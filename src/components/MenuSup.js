import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Badge from "@mui/material/Badge";
//import { BiBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../App";
import { useContext } from "react";
import { allContact } from "../features/slices/contactSlice";
import { useSelector } from "react-redux";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 10px #00000005;
  height: 100px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 30px;
  margin-top: 30px;
  text-transform: capitalize;
`;
const IconsWrapper = styled.div`
  margin-right: 60px;
  margin-top: 30px;
`;
const Icon = styled.span`
  color: #135846;
  font-size: x-large;
  margin-left: 30px;
  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
`;

export default function MenuSup(props) {
  const { state, dispatch } = useContext(AuthContext);
  const display = state.authenticated ? "flex" : "none";
  const navigate = useNavigate();
  const location = useLocation();
  const contact = useSelector(allContact);
  const contactNoViewed = contact.filter(
    (contact) => contact.viewed === "false"
  );

  let currentLocation = location.pathname.substring(1);
  if (currentLocation === "users/newUser") {
    currentLocation = "Users";
  } else if (currentLocation === "users/editUser") {
    currentLocation = "Users";
  } else if (currentLocation === "rooms/newRoom") {
    currentLocation = "Rooms";
  }

  const handleClick = () => {
    props.displayLat === "block"
      ? props.setDisplayLat("none")
      : props.setDisplayLat("block");
  };
  const IconDisplayLat =
    props.displayLat === "block" ? BsArrowBarLeft : BsArrowBarRight;

  const Logout = () => {
    dispatch({ type: "logout" });
    navigate("/login", { replace: true });
  };

  return (
    <MenuWrapper style={{ display }}>
      <div style={{ display: "flex" }}>
        <IconDisplayLat
          style={{ marginTop: 35, marginLeft: 15, fontSize: "xx-large" }}
          onClick={() => handleClick()}
        />
        <Title>{currentLocation}</Title>
      </div>
      <IconsWrapper>
        <NavLink to="/contact">
          <Icon>
            <Badge
              badgeContent={contactNoViewed.length}
              color="success"
              style={{ marginTop: -10 }}
            >
              <HiOutlineMail color="action" />
            </Badge>
          </Icon>
        </NavLink>
        {/* <Icon>
          <BiBell />
        </Icon> */}
        <Icon>
          <TbLogout onClick={() => Logout()} />
        </Icon>
      </IconsWrapper>
    </MenuWrapper>
  );
}
