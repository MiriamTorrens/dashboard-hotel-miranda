import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../features/slices/bookingsSlice";
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
const TextArea = styled.textarea`
  height: 50px;
  width: 370px;
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
export default function ModalNewBooking(props) {
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputCheckin, setInputCheckin] = useState("");
  const [inputCheckout, setInputCheckout] = useState("");
  const [inputRequest, setInputRequest] = useState("");
  const [inputRoom, setInputRoom] = useState("");
  const [inputType, setInputType] = useState("single Bed");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBooking({
        fullName: inputName,
        id: faker.datatype.uuid().substring(0, 13),
        date: inputDate,
        checkin: inputCheckin,
        checkout: inputCheckout,
        roomInfo: inputRoom,
        specialRequest: inputRequest,
        roomType: inputType,
        status: "In progress",
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
          <Title>Add New Booking</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="guest_name"
              placeholder="Guest Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="order_date"
              placeholder="Date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="checkin"
              placeholder="Check In"
              value={inputCheckin}
              onChange={(e) => setInputCheckin(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="checkout"
              placeholder="Check Out"
              value={inputCheckout}
              onChange={(e) => setInputCheckout(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="room"
              placeholder="Room Number"
              value={inputRoom}
              onChange={(e) => setInputRoom(e.target.value)}
            ></Input>
            <Select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
            >
              <option>Single Bed</option>
              <option>Double Bed</option>
              <option>Double Superior</option>
              <option>Suite</option>
            </Select>
            <TextArea
              type="text"
              name="request"
              placeholder="Special Request"
              value={inputRequest}
              onChange={(e) => setInputRequest(e.target.value)}
            ></TextArea>
            <InputSubmit type="submit" value="Send"></InputSubmit>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
