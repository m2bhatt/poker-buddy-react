import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setToken }) => {
  const performLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="header">
      <p className="header__logo">Poker Buddy</p>
      <ul className="header__list">
        {isLoggedIn ? (
          <>
          <Link to="/trainer">
              <li className="header__item">Trainer</li>
            </Link>
            <Link to="/account">
              <li className="header__item">Account</li>
            </Link>
            <Link to="/login">
            <li className="header__item" onClick={performLogout}>
              Log out
            </li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              <li className="header__item">Register</li>
            </Link>
            <Link to="/login">
              <li className="header__item">Login</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
