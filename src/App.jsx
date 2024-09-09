import ProductsPage from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import UserAuth from "./pages/UserAuth";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route index element={<Home />} />
         index essa path jiska path is blank*/}
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="product-details/:id" element={<ProductsDetails />}></Route>
        {/*product-details/:id" id here says optional hai otherwise id necessary */}
        <Route path="user-auth" element={<UserAuth />}>
          <Route index element={<h1>This will run by Default</h1>} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
