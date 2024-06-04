import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ token, setToken }) => {
  const handleOnClick =() => {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <div className="header">
      <p>Poker Buddy</p>
      <ul className="header__list">
      <Link to="/signup"><li className="header__item">Signup Page</li></Link>
      <Link to="/login"><li className="header__item">Login Page</li></Link>
        <Link to="/trainer"><li className="header__item">Trainer</li></Link>
        <Link to="/account"><li className="header__item">Account</li></Link>
        <button className="header__item" onClick={handleOnClick}>Log out</button>
      </ul>
    </div>
  );
};

export default Header;
