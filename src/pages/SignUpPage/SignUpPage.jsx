import RegisterForm from "../../components/RegisterForm/RegisterForm";
import dogImage from "../../assets/images/poker_sympathy.jpg";
import "./SignUpPage.scss";
import axios from "axios";

const API_URL = import.meta.env.VITE_LOCALHOST;

const SignUpPage = () => {
  const postUser = async ({ username, password }) => {
    const user = { username, password };
    await axios.post(`${API_URL}/users/signup`, user);
  };

  return (
      <main className="signup">
        <img
          src={dogImage}
          alt="dogs playing poker"
          className="signup__image"
        />
        <RegisterForm
          onSubmit={postUser}
          buttonText="Sign Up"
          successMessage="Sign up successful."
          errorMessage="Error in signing in. Try again."
        />
      </main>
  );
};

export default SignUpPage;
//TODO  add the login conditions
//TODO check why signup is not 100% height
