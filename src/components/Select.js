import styled from "styled-components";

export const SelectDiv = styled.select`
  border-color: #135846;
  color: #135846;
  border-radius: 12px;
  width: 100px;
  height: 49px;
  text-align: center;
  font-size: 14px;
`;
export default function Select(props) {
  return (
    <SelectDiv>
      {props.selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectDiv>
  );
}
