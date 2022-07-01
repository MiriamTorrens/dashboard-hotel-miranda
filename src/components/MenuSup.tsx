import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../App";
import { useContext } from "react";
import { PropsNavBar } from '../services/types';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 10px #00000005;
  height: 100px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 30px;
  margin-top: 30px;
  text-transform: capitalize;
`;
const IconsWrapper = styled.div`
  margin-top: 30px;
  margin-right: 60px;
`;
const Icon = styled.span`
  color: #135846;
  font-size: xx-large;
  margin-left: 30px;
  &:hover {
    color: #e23428;
  }
`

export default function MenuSup({displayLat, setDisplayLat}: PropsNavBar) {
  const { state, dispatch } = useContext(AuthContext);
  const display = state.authenticated ? "flex" : "none";
  const navigate = useNavigate();
  const location = useLocation();
  let currentLocation = location.pathname.substring(1);
    if (currentLocation === "users/newUser") {
      currentLocation = "Users";
    } else if (currentLocation === "users/editUser") {
      currentLocation = "Users";
    } else if (currentLocation === "rooms/newRoom") {
      currentLocation = "Rooms";
    }

  const handleClick = () => {
    displayLat === "block"
      ? setDisplayLat("none")
      : setDisplayLat("block");
  };
  const IconDisplayLat =
    displayLat === "block" ? BsArrowBarLeft : BsArrowBarRight;
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
        <Icon>
          <HiOutlineMail />
        </Icon>
        <Icon>
          <BiBell />
        </Icon>
        <Icon>
          <TbLogout onClick={() => Logout()} />
        </Icon>
      </IconsWrapper>
    </MenuWrapper>
  );
}
