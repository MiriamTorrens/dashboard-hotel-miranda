import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { oneBooking } from "../features/slices/bookingsSlice";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BsCheck2Square } from "react-icons/bs";

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

const Title = styled.h3`
  color: #135846;
`;
const Icon = styled.div`
  color: #135846;
  font-size: xx-large;
  float: right;
`;

export default function ModalViewNotes(props) {
  const { openNotes, handleClose } = props;
  const booking = useSelector(oneBooking);
  const color =
    booking.status === "in_progress"
      ? "#FF9C3A"
      : booking.status === "checkin"
      ? "#5AD07A"
      : "#E23428";
  return (
    <div>
      <Modal
        open={openNotes}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>Special Request:</Title>
          <p>
            <i>{booking.special_request}</i>
          </p>
          <p>
            <b>Guest:</b> {booking.guest_name}
            <br />
            <b>Id Booking:</b> {booking._id}
          </p>
          <p style={{ color: color }}>
            {booking.status === "in_progress"
              ? "In progress"
              : booking.status === "checkin"
              ? "Check In"
              : "Check Out"}
          </p>
          <Icon>
            <BsCheck2Square onClick={handleClose} />
          </Icon>
        </Box>
      </Modal>
    </div>
  );
}
