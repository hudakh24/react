import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import UserAuth from "./pages/UserAuth";
import Signup from "./pages/Signup";
import Layout from "./components/Layouts";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import FormValidation from "./pages/FormValidation";

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
        <Route path="form" element={<FormValidation />} />
        <Route path="product-details/:id" element={<ProductDetails />} />

        <Route path="user-auth" element={<UserAuth />}>
          <Route path="login" element={<LoginPage />} />{" "}
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
