import HandsList from "../../components/HandsList/HandsList";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AccountPage.scss";

const API_URL = import.meta.env.VITE_LOCALHOST;

const AccountPage = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      setUser(null)
    }
  }, [token]);

  async function getUser() {
    try {
    const { data } = await axios.get(`${API_URL}/users/account`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    setUser(data);
  } catch (error) {
    console.error('Error fetching user data:', error)
    setUser(null);
  }}

  if(!user) {
    return <div>Loading....in home page</div>;
  }

  return (
    <div className="account">
      {user ? (
        <div className="account__container">
          <h1 className="account__title">Welcome, {user.user_name}</h1>
          <HandsList token={token}/>
        </div>
      ) : (
        <div>Please log in to see your account details.</div>
      )}
    </div>
  )
}

export default AccountPage;