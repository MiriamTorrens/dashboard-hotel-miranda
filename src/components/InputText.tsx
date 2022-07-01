import styled from 'styled-components';
import { PropsInputText } from '../services/types';

const Input = styled.input`
  border-color: #135846;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  float: right;
  text-align: center;
`
export default function InputText({placeholder}: PropsInputText){
    return(
        <Input placeholder={placeholder}></Input>
    )
}