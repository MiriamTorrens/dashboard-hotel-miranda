import styled from "styled-components";

const Input = styled.input`
  border-radius: 8px;
  width: 50%;
  height: 30px;
  margin: 10px;
  text-indent: 10px;
`;
const InputSubmit = styled.input`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  width: 158px;
  height: 47px;
  background: #ebf1ee;
  color: #135846;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  border: 1px solid #799283;
  &:hover {
    background: #799283;
    color: white;
  }
`;
export default function FormLogo(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Input
        type="email"
        data-cy="user"
        value={props.user}
        onChange={(e) => props.setUser(e.target.value)}
        placeholder="User"
        required
      ></Input>
      <br />
      <Input
        type="password"
        data-cy="password"
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
        placeholder="Password"
        required
      ></Input>
      <br />
      <InputSubmit data-cy="submit" type="submit" value="Login" />
    </form>
  );
}
