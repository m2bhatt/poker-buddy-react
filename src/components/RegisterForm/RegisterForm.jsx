import { useState } from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RegisterForm = ({ onSubmit, buttonText, successMessage, errorMessage, signedUp }) => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

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
      } catch (error) {
        console.error("Error while processing the form", error);
        setError(errorMessage);
      }
    } else {
      setError("Username or password is missing.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit} className="form__form">
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
        {signedUp && !error && (
          <div className="form__copy--success">
            {`${successMessage} `}
            <Link to="/login">Log in</Link>
          </div>
        )}
        {error && <div className="form__copy">{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm;
