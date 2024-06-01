import RegisterForm from "../../components/RegisterForm/RegisterForm";
import dogImage from "../../assets/images/poker_sympathy.jpg"
import "./SignUpPage.scss";

const SignUpPage = () => {
  return (
    <div className="signup">
    <main className="signup__page">
      <img src={dogImage} alt="dogs playing poker" className="signup__image"/>
      <RegisterForm />
    </main>
    </div>
  )
};

export default SignUpPage;
//TODO  add the login conditions
//TODO check why signup is not 100% height 
