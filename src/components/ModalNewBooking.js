import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createBooking } from "../features/slices/bookingsSlice";

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

export default function ModalNewBooking(props) {
  const { open, handleClose } = props;
  const [inputName, setInputName] = useState("");
  const [inputDate, setinputDate] = useState("");
  const [inputCheckin, setinputCheckin] = useState("");
  const [inputCheckout, setinputCheckout] = useState("");
  const [inputRequest, setinputRequest] = useState("");
  const [inputRoom, setinputRoom] = useState("");
  const [inputStatus, setinputStatus] = useState("");

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const booking = {
      guest_name: inputName,
      order_date: new Date(inputDate),
      checkin: new Date(inputCheckin),
      checkout: new Date(inputCheckout),
      special_request: inputRequest,
      room_id: inputRoom,
      status: inputStatus,
    };
    dispatch(createBooking(booking));
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
          <h1>Add Booking</h1>
          <form onSubmit={handlerSubmit}>
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
              placeholder="Date: AAAA, MM, DD"
              value={inputDate}
              onChange={(e) => setinputDate(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="checkin"
              placeholder="Check In: AAAA, MM, DD"
              value={inputCheckin}
              onChange={(e) => setinputCheckin(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="checkout"
              placeholder="Check Out: AAAA, MM, DD"
              value={inputCheckout}
              onChange={(e) => setinputCheckout(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="request"
              placeholder="Special Request"
              value={inputRequest}
              onChange={(e) => setinputRequest(e.target.value)}
            ></Input>
            <Input
              type="text"
              name="room"
              placeholder="Room Id"
              value={inputRoom}
              onChange={(e) => setinputRoom(e.target.value)}
            ></Input>
            <Select
              value={inputStatus}
              onChange={(e) => setinputStatus(e.target.value)}
            >
              <option value="checkin">Check In</option>
              <option value="checkout">Check Out</option>
              <option value="in_progress">In Progress</option>
            </Select>
            <InputSubmit type="submit" value="Send"></InputSubmit>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
