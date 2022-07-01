import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateContact } from "../features/slices/contactSlice";
import { PropsModalContact } from '../services/types';

const Modal = styled.div`
  width: 500px;
  position: absolute;
  margin-top: 5%;
  margin-left: 25%;
  background-color: white;
  box-shadow: 2px 2px 100px 50px #ebf1ef;
  border-radius: 50px;
`;
const IconClose = styled.div`
  float: right;
  margin-top: 30px;
  margin-right: 30px;
  font-size: 30px;
  cursor: pointer;
  color: #799283;
  &:hover {
    color: #135846;
  }
`;
const DataWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
`;
const Subject = styled.h1`
  color: #135846;
`;

export default function ModalContact({open, setOpen, message}: PropsModalContact) {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen("none");
    dispatch(updateContact({ ...message, viewed: true }));
  };

  return (
    <Modal style={{ display: open }}>
      <IconClose>
        <AiOutlineCloseCircle onClick={() => handleClose()} />
      </IconClose>
      <DataWrapper>
        <Subject>{message.subject}</Subject>
        <p>{message.comment}</p>
      </DataWrapper>
    </Modal>
  );
}
