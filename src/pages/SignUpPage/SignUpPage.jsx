import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_LOCALHOST;

const SignUpPage = () => {
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
      const postUserRequest = await axios.post(`${API_URL}/signup`, user);
      setSignedUp(true);
      console.log(user);
    } catch (error) {
      console.error("Error while posting video", error);
      setError("Error in signing up");
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postUser();
  };

  return (
    <>
      <div>
        <h1>Sign Up Page</h1>
      </div>

      <form onSubmit={handleFormSubmit} className="signuppage">
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

        <button>Sign Up</button>
        {signedUp && <div>Sign up successful, please log in</div>}
        {error && <div>{error}</div>}
     
      </form>
    </>
  );
};

export default SignUpPage;
   //TODO  add the login conditions 