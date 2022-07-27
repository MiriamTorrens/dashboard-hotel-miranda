import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useState, useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUser } from "../features/slices/usersSlice";
import { AuthContext } from "../App";

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

const Title = styled.h1`
  color: #135846;
`;
const InputText = styled.input`
  font-size: 14px;
  color: #799283;
  border-radius: 5px;
  height: 30px;
  width: 300px;
  padding-left: 10px;
`;
const InputSubmit = styled.input`
  font-size: 14px;
  background-color: #799283;
  color: white;
  border-radius: 5px;
  height: 35px;
  margin-left: 10px;
`;

export default function ModalEditUser(props) {
  const { state, dispatch } = useContext(AuthContext);
  const { open, handleClose } = props;
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch({ type: "changeName", name: name });
    dispatch({ type: "changeName", name: name });
  };
  const handleSubmitEmail = (event) => {
    event.preventDefault();
    dispatch({ type: "changeEmail", email: email });
    dispatch({ type: "changeEmail", email: email });
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
          <Title>Edit User</Title>
          <form onSubmit={handleSubmitName}>
            <InputText
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputText>
            <InputSubmit type="submit" value="change"></InputSubmit>
          </form>
          <br />
          <form onSubmit={handleSubmitEmail}>
            <InputText
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputText>
            <InputSubmit type="submit" value="change"></InputSubmit>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
