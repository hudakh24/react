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
export default Navbar;
