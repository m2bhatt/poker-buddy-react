import { useState } from "react";
import axios from "axios";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_LOCALHOST;

const RegisterForm = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  async function postUser() {
    try {
      const user = {
        username,
        password,
      };
      const postUserRequest = await axios.post(`${API_URL}/users/signup`, user);
      setError("");
      setSignedUp(true);
    } catch (error) {
      console.error("Error while creating a user", error);
      setError("Error in signing up");
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postUser();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="username" className="form__label">
          Username
          <input
            type="text"
            name="username"
            value={username}
            className="form__input"
            placeholder="Enter your username"
            onChange={handleChangeUsername}
          />
        </label>

        <label htmlFor="password" className="form__label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            className="form__input"
            placeholder="Enter your password"
            onChange={handleChangePassword}
          />
        </label>

        <button>Sign Up</button>
        {signedUp && <div>Sign up successful, please <Link to="/login">log in</Link></div>}
        {error && <div>{error}</div>}
      </form>
    </>
  );
};

export default RegisterForm;
//TODO  add the login conditions
