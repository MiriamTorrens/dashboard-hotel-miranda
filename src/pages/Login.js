import { useState, useContext } from "react";
import { LogoWrapper } from "../styles/Styles";
import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";
import { AuthContext } from "../App";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState("m.torrens@miranda.com");
  const [password, setPassword] = useState("1234");

  const myUser = {
    name: "Miriam Torrens",
    email: "m.torrens@miranda.com",
    password: "1234",
  };

  const userData = {
    userName: myUser.name,
    userEmail: myUser.email,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === myUser.email && password === myUser.password) {
      dispatch({ type: "login", user: userData });
    }
  };

  return (
    <LogoWrapper>
      <Logo />
      <FormLogin
        handleSubmit={handleSubmit}
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
      />
    </LogoWrapper>
  );
}
