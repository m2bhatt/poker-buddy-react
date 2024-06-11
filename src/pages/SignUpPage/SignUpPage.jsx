import { useState } from "react";
import axios from "axios";
import "./SignUpPage.scss";
import Images from "../../components/ImagesList/Images";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const API_URL = import.meta.env.VITE_LOCALHOST;

const SignUpPage = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState(null);

  const postUser = async ({ username, password }) => {
    const user = { username, password };
    try {
      const request = await axios.post(`${API_URL}/users/signup`, user);
      setSignedUp(true);
      setError(null);
    } catch (error) {
      setSignedUp(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <main className="signup">
      <Images />
      <RegisterForm
        onSubmit={postUser}
        buttonText="Sign Up"
        successMessage="Sign up successful."
        errorMessage={error}
        signedUp={signedUp}
      />
    </main>
  );
};

export default SignUpPage;
