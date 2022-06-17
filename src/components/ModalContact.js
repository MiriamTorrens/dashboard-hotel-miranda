import styled from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { allContact, getThisContact } from "../redux/slices/contactSlice";

const Modal = styled.div`
width: 500px;
height: 500px;
position: absolute;
margin: 0 auto;
top: 30%;
left: 45%;
background-color: white;
box-shadow: 0px 20px 30px #00000014;
border-radius: 50px;   
`
const IconClose = styled.div`
    float: right;
    margin-top: 30px;
    margin-right: 30px;
    font-size: 30px;
    cursor: pointer;
    color: #135846;
    &:hover{
        color: black;
    }
`

export default function ModalContact(props){
    const dispatch = useDispatch();
    const contactList = useSelector(allContact);
   
    
    return(
        <Modal style={{display:props.open}}>
            <IconClose><AiOutlineCloseCircle onClick={() => props.setOpen("none")}/></IconClose>
            {props.message}
        </Modal>
    )
}