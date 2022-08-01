import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/slices/usersSlice";
import { faker } from "@faker-js/faker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  fontFamily: "Poppins",
};

const Title = styled.h2`
  color: #135846;
`;
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
  margin-left: 110px;
  background-color: #135846;
  color: white;
`;
const Select = styled.select`
  height: 30px;
  width: 185px;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
`;
export default function ModalNewUser(props) {
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputOccupation, setInputOccupation] = useState("Manager");
  const [inputImage, setInputImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        id: faker.datatype.uuid().substring(0, 13),
        fullName: inputName,
        contact: inputPhone,
        startDate: inputDate,
        occupation: inputOccupation,
        status: "true",
        photo: inputImage,
      })
    );
    handleClose();
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
          <Title>Add New Employee</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            ></Input>
            <Input type="email" placeholder="Email" />
            <Input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="date"
              placeholder="Start Date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            ></Input>
            <Select
              value={inputOccupation}
              onChange={(e) => setInputOccupation(e.target.value)}
            >
              <option>Manager</option>
              <option>Room Service</option>
              <option>Reception</option>
            </Select>
            <Input type="text" placeholder="Password" />
            <Input type="text" placeholder="Repeat Password" />
            <Input
              type="text"
              placeholder="Url Image"
              value={inputImage}
              onChange={(e) => setInputImage(e.target.value)}
            />
            <InputSubmit type="submit" value="Send"></InputSubmit>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
