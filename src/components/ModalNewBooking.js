import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

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

export default function ModalNewBooking(props) {
  const { open, handleClose } = props;

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
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Name" />
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
