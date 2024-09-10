import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLogged = false;
  return (
    <>{isLogged ? props.children : <Navigate to={"/user-auth/login"} />}</>
  );
};

export default PrivateRoute;
