import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { oneBooking } from "../features/slices/bookingsSlice";
import { BsCheck2Square } from "react-icons/bs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
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
const Icon = styled.div`
  float: right;
  color: #135846;
  font-size: xx-large;
  cursor: pointer;
  &:hover {
    filter: brightness(2);
  }
`;

export default function ModalViewNotes(props) {
  const { open, handleClose } = props;
  const thisBooking = useSelector(oneBooking);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>Special Request</Title>
          {thisBooking.map((booking) => (
            <div key={booking.id}>
              <p>{booking.specialRequest}</p>
            </div>
          ))}
          <Icon>
            <BsCheck2Square onClick={handleClose} />
          </Icon>
        </Box>
      </Modal>
    </div>
  );
}
