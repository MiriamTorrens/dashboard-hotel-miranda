import styled from "styled-components";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getContact,
  allContact,
  getOneContact,
} from "../features/slices/contactSlice";
import { useState } from "react";
import ModalContact from "./ModalContact";

const ContactsWrapper = styled.div`
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  width: 95%;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 30px;
`;
const DivMsgs = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
`;
const DivMsg = styled.div`
  width: 32%;
  border: 1px solid #ebebeb;
  border-radius: 20px;
`;
const Msg = styled.div`
  margin: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;
const DivUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const User = styled.div`
  margin-left: 10px;
`;
const Icon = styled.div`
  float: right;
  margin-top: 30px;
`;

export default function ContactsDiv() {
  const dispatch = useDispatch();
  const contactList = useSelector(allContact);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handeClick = (id) => {
    setOpen(true);
    dispatch(getOneContact(id));
  };

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <>
      <ContactsWrapper>
        <Title>Latest Review by Customers</Title>
        <DivMsgs>
          {contactList.map((contact) => (
            <DivMsg key={contact.id} onClick={() => handeClick(contact.id)}>
              <Msg>
                <b>{contact.subject}</b>
                <br />
                {contact.comment}
              </Msg>
              <DivUser>
                <User>
                  <b>
                    <span>{contact.customer.fullName}</span>
                    <br />
                  </b>
                  <span>{contact.customer.email}</span>
                  <br />
                  <span>{contact.customer.phoneNumber}</span>
                </User>
                <Icon>
                  {contact.viewed === "false" ? (
                    <AiOutlineCloseCircle
                      style={{ color: "red", fontSize: "x-large" }}
                    />
                  ) : (
                    <AiOutlineCheckCircle
                      style={{ color: "green", fontSize: "x-large" }}
                    />
                  )}
                </Icon>
              </DivUser>
            </DivMsg>
          ))}
          <ModalContact open={open} handleClose={handleClose} />
        </DivMsgs>
      </ContactsWrapper>
    </>
  );
}
