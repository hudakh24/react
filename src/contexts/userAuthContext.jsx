import { createContext } from "react";
// import PropTypes from "prop-types";

const userAuthContext = createContext();

const UserAuthContextProvider = (props) => {
  return (
    <userAuthContext.Provider value={"dark"}>
      {props.children}
    </userAuthContext.Provider>
  );
};

// userAuthContextProvider.propTypes = {
//   children: PropTypes.children.isRequired,
// };
export { UserAuthContextProvider, userAuthContext };
