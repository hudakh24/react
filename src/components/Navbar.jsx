<<<<<<< HEAD
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between bg-teal-800">
      <h1>Navbar</h1>
      {/**NavLink is alternative to anchor tags as anchor tags will update the whole dom page but navlink will just update the certain parts */}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/user-auth/login"}>Login</NavLink>
    </nav>
  );
};
=======
const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "blue",
        padding: "10px",
        fontSize: "35px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      Welcome
    </nav>
  );
};

>>>>>>> 90224203b9b3167d4ee983f08c54ded6592090b3
export default Navbar;
