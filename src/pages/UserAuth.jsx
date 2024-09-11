import { Outlet } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
      <h1> User Auth</h1>
      <Outlet />
      {/*outlet will paste the child route Here, if used above h1-tag the it will paste above*/}
    </>
  );
};

export default UserAuth;
