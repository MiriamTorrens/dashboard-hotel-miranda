import styled from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { updateContact } from "../features/slices/contactSlice";

const Modal = styled.div`
    width: 500px;
    position: absolute;
    margin-top: 5%;
    margin-left: 25%;
    background-color: white;
    box-shadow: 2px 2px 100px 50px #EBF1EF;
    border-radius: 50px;   
`
const IconClose = styled.div`
    float: right;
    margin-top: 30px;
    margin-right: 30px;
    font-size: 30px;
    cursor: pointer;
    color: #799283;
    &:hover{
        color: #135846;
    }
`
const DataContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
`
const Subject = styled.h1`
    color: #135846;
    
`

export default function ModalContact(props){
    const dispatch = useDispatch();

    const handleClose = () => {
        props.setOpen("none");
        dispatch(updateContact({...props.message, viewed: "YES"}));
    }
    
    return(
        <Modal style={{display:props.open}}>
            <IconClose><AiOutlineCloseCircle onClick={() => handleClose()}/></IconClose>
            <DataContainer>
                <Subject>{props.message.subject}</Subject>
                <p>{props.message.comment}</p>
            </DataContainer>
        </Modal>
    )
}