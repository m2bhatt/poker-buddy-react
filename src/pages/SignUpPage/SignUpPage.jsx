import Images from "../../components/ImagesList/Images";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
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
        <Images />
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
