import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const x = useParams();
  console.log(x);
  return (
    <>
      <h1>HELLO PRODUCT DETAILS</h1>
    </>
  );
};

export default ProductDetails;
