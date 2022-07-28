import { useState, useContext } from "react";
import { LogoWrapper } from "../styles/Styles";
import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";
import { AuthContext } from "../App";
import { loginDB } from "../api";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginDB(user, password);
    if (token) dispatch({ type: "login", user: user });
    console.log(token);
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
