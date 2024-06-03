import HandsList from "../../components/HandsList/HandsList";
import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log('user:', user.id);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.user_name}</h1>
          <HandsList user_id={user.id} token={token}/>
        </div>
      ) : (
        <div>Please log in to see your account details.</div>
      )}
    </div>
  )
}

export default AccountPage;