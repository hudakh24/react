//import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const x = useParams();
  console.log(x);
  //   useEffect(() => {
  //     makeApiCall(x.id);
  //   }, []);
  return <h1>Product Details</h1>;
};

export default ProductDetail;
