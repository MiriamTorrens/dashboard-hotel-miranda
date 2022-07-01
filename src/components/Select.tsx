import styled from "styled-components";
import { PropsSelect } from '../services/types';

export const SelectDiv = styled.select`
  border-color: #135846;
  color: #135846;
  border-radius: 12px;
  width: 129px;
  height: 49px;
  text-align: center;
  font-size: 16px;
`;
export default function Select({selectOptions}: PropsSelect) {
  return (
    <SelectDiv>
      {selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectDiv>
  );
}
