import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const API_URL = import.meta.env.VITE_LOCALHOST;

const LoginPage = ({ setToken }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getUser = async ({ username, password }) => {
    const user = { username, password };
    const getUserRequest = await axios.post(`${API_URL}/users/login`, user);
    const { token } = getUserRequest.data;
    localStorage.setItem("token", token);
    setToken(token);
    setSignedIn(true);
    setError("");
    navigate("/account");
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>

      <RegisterForm
        onSubmit={getUser}
        buttonText="Log in"
        successMessage="Login successful"
        errorMessage="Error in signing in"
      />
    </>
  );
};

export default LoginPage;
