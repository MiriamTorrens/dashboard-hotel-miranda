//import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { oneContact, updateContact } from "../features/slices/contactSlice";
import { CgCloseR } from "react-icons/cg";

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
  fontFamily: "Poppins",
};

const Icon = styled.div`
  float: right;
  //color: #135846;
  font-size: x-large;
`;

const Subject = styled.h3`
  color: #135846;
`;

export default function ModalContact(props) {
  const { open, handleClose } = props;
  const contactMessage = useSelector(oneContact);
  //const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Icon>
            <CgCloseR onClick={handleClose} />
          </Icon>
          <Subject>{contactMessage.subject}</Subject>
          <p>{contactMessage.comment}</p>
          <p>
            <br />
            <b>Email:</b> {contactMessage.contact_email}
            <br />
            <b>Phone Number:</b> {contactMessage.contact_phone}
          </p>
          <p>
            <b>Date:</b>{" "}
            {new Date(contactMessage.contact_date).toLocaleDateString()}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
