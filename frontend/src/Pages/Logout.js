import { useContext } from "react";
import { UserContext } from "../App";
const Logout = () => {
  const { setUser } = useContext(UserContext);
  setUser({userName: '' ,loggedIn: false, accountType: ''})
};

export default Logout;
