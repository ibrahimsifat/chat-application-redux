import { useSelector } from "react-redux";

const UseAuth = () => {
  const auth = useSelector((state) => state.auth);
  if (auth?.accessToken && auth?.user) {
    return true;
  } else {
    return false;
  }
};

export default UseAuth;
