import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, setToken }) => {
  const performLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="header">
      <NavLink to="/trainer">
        <p className="header__logo">Poker Buddy</p>
      </NavLink>
      <ul className="header__list">
        {isLoggedIn ? (
          <>
          <NavLink to="/trainer">
              <li className="header__item">Trainer</li>
            </NavLink>
            <NavLink to="/account">
              <li className="header__item">Account</li>
            </NavLink>
            <NavLink to="/login">
            <li className="header__item" onClick={performLogout}>
              Log out
            </li>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">
              <li className="header__item">Register</li>
            </NavLink>
            <NavLink to="/login">
              <li className="header__item">Login</li>
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
