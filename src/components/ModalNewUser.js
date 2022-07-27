import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, createUser } from "../features/slices/usersSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
`;
const InputSubmit = styled.input`
  height: 35px;
  width: 185px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #135846;
  color: white;
`;
const Select = styled.select`
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 185px;
`;

export default function ModalNewUser(props) {
  const { open, handleClose } = props;
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputOccupation, setInputOccupation] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const dispatch = useDispatch();
  //const usersList = useSelector(allUsers);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser());
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Add Employee</h1>
          <form onSubmit={handlerSubmit}>
            <Input
              type="text"
              name="user_name"
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            ></Input>
            <Input
              type="email"
              name="user_email"
              placeholder="Email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="start_date"
              placeholder="Start Date: AAAA, MM, DD"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="user_image"
              placeholder="Image"
              value={inputImage}
              onChange={(e) => setInputImage(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="password"
              placeholder="Password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            ></Input>
            <Select
              value={inputOccupation}
              onChange={(e) => setInputOccupation(e.target.value)}
            >
              <option value="manager">Manager</option>
              <option value="reception">Reception</option>
              <option value="room_service">Room Service</option>
            </Select>
            <InputSubmit type="submit" value="Send"></InputSubmit>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
