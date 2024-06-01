import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_LOCALHOST;

const LoginPage = ({ setToken }) => {
  const [signedIn, setSignedIn] = useState(false)
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeUsername = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };
  //TODO: Set up conditions for empty fields. 
  // if (!username || !password) {
  //   alert("Missing information. Try again.");
  // }

  async function getUser() {
    try {
      const user = {
        username,
        password,
      };
      const getUserRequest = await axios.post(`${API_URL}/users/login`, user);
      const { token } = getUserRequest;
      localStorage.setItem("token", token);
      setToken(token);
      setSignedIn(true);
      setError("")
      navigate("/trainer");
    } catch (error) {
      console.error("Error while signing in", error);
      setError("Error in signing up");
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getUser();
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>

      <form onSubmit={handleFormSubmit} className="LoginPage">
        <label htmlFor="username">
          {" "}
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
        </label>

        <label htmlFor="password">
          {" "}
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <button>Log in</button>
        {signedIn && <div>Login successful</div>}
        {error && <div>{error}</div>}
     
      </form>
    </>
  );
};

export default LoginPage;
   //TODO set appropriate error messages to the user