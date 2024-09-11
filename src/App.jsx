import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products";
<<<<<<< HEAD
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import UserAuth from "./pages/UserAuth";
import Signup from "./pages/Signup";
import Layout from "./components/Layouts";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          index={true}
          element={
            <Layout>
              {/** adds footer and header to desired pages as login and signup page do not have header and footer */}
              <Home />
            </Layout>
          }
        />
        <Route
          path="products"
          element={
            <PrivateRoute>
              {/** It will authenticate before accessing a certain page */}
              <Layout>
                <ProductsPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="product-details/:id" element={<ProductDetails />} />

        <Route path="user-auth" element={<UserAuth />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
        </Route>

=======
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
>>>>>>> 90224203b9b3167d4ee983f08c54ded6592090b3
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
