import { useState, useContext } from "react";
import { LogoWrapper } from "../styles/Styles";
import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";
import { AuthContext } from "../App";
import { loginDB } from "../api";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState("m.torrens@miranda.com");
  const [password, setPassword] = useState("1234");

  const userData = {
    userName: "Miriam Torrens",
    userEmail: "m.torrens@miranda.com",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginDB(user, password);
    if (token) {
      dispatch({ type: "login", user: userData });
      localStorage.setItem("token", token);
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
