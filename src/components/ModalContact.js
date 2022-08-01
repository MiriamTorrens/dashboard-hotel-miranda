import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  oneContact,
  updateContact,
  allContact,
} from "../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsCheck2Square } from "react-icons/bs";

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

const Subject = styled.h3`
  color: #135846;
`;

const Icon = styled.div`
  float: right;
  color: #135846;
  font-size: xx-large;
`;

export default function ModalContact(props) {
  const { open, handleClose } = props;
  const thisContact = useSelector(oneContact);
  const contactList = useSelector(allContact);
  const dispatch = useDispatch();

  const handleClick = (contact) => {
    handleClose();
    dispatch(
      updateContact({
        id: contact.id,
        date: contact.date,
        customer: {
          fullName: contact.customer.fullName,
          email: contact.customer.email,
          phoneNumber: contact.customer.phoneNumber,
        },
        subject: contact.subject,
        comment: contact.comment,
        viewed: "true",
        archived: contact.archived,
      })
    );
    console.log(contact.id);
    console.log(contactList);
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
          {thisContact.map((contact) => (
            <div key={contact.id}>
              <div>
                <Subject>{contact.subject}</Subject>
                <p>{contact.comment}</p>
                <p>
                  <b> {contact.customer.fullName}</b>
                </p>
                <p>
                  <b>Email: </b>
                  {contact.customer.email}
                  <br />
                  <b>Phone Number: </b>
                  {contact.customer.phoneNumber}
                </p>
              </div>
              <Icon>
                <BsCheck2Square onClick={() => handleClick(contact)} />
              </Icon>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
