import jokerImage from "../../assets/images/joker.jpg"
import "./NotFoundPage.scss";
import { NavLink} from "react-router-dom";

const NotFoundPage = () => {

  return (
    <div className="notfoundpage">
    <h1 className="notfoundpage__title">Lost your way?</h1>
    <img src={jokerImage} alt="joker image" className="notfoundpage__image"/>
    <p className="notfoundpage__copy">Return to the <NavLink to="/"> main page </NavLink></p>
    </div>
  )
}

export default NotFoundPage;