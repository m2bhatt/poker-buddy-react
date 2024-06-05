import { useState } from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_LOCALHOST;

const RegisterForm = ({ onSubmit, buttonText, successMessage, errorMessage }) => {
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

  const isFormValid = () => {
    return !!username && !!password;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid()) {
      try {
        await onSubmit({ username, password });
        setSignedUp(true);
        setError(null);
      } catch (error) {
        console.error("Error while processing the form", error);
        setSignedUp("");
        setError(errorMessage);
      }
    } else {
      setError("Username or password is missing.");
    }
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

        <button className="form__button">{buttonText}</button>
        {signedUp && (
          <div className="form__copy">
            {successMessage}
            <Link to="/login">log in</Link>
          </div>
        )}
        {error && <div className="form__copy">{error}</div>}
      </form>
    </>
  );
};

export default RegisterForm;
