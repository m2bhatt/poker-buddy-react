import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Images from "../../components/ImagesList/Images";

const API_URL = import.meta.env.VITE_LOCALHOST;

const LoginPage = ({ setToken }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const getUser = async ({ username, password }) => {
    const user = { username, password };
    try {
      const getUserRequest = await axios.post(`${API_URL}/users/login`, user);
      const { token } = getUserRequest.data;
      localStorage.setItem("token", token);
      setToken(token);
      setSignedIn(true);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <main className="login">
      <Images />
      <RegisterForm
        onSubmit={getUser}
        buttonText="Log in"
        successMessage="Login successful."
        errorMessage={error}
      />
    </main>
  );
};

export default LoginPage;
