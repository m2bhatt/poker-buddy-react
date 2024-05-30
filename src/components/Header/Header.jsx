import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="header__list">
      <Link to="/signup"><li className="header__item">Signup Page</li></Link>
      <Link to="/login"><li className="header__item">Login Page</li></Link>
        <Link to="/trainer"><li className="header__item">Trainer</li></Link>
        <Link to="/account"><li className="header__item">Account</li></Link>
        <li className="header__item">Log out</li>
      </ul>
    </div>
  );
};

export default Header;
