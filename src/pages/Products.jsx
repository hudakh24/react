import { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data); // Update state with the fetched products
      setSearchedProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteHandler = (id) => {
    const updatedItems = searchedProducts.filter((currentProduct) => {
      return currentProduct.id !== id;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    const searchInput = e.target.value;
    const searchResult = products.filter((item) => {
      if (item.title.toLowerCase().includes(searchInput.toLowerCase())) {
        return true;
      }
    });
    console.log(searchResult);
    setSearchedProducts(searchResult);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <h1>Products Page</h1>
      <input onChange={searchHandler} placeholder="Search the item"></input>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {setSearchedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {product.title}
            </h2>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "200px", // Fixed width for all images
                height: "200px", // Fixed height for all images
                objectFit: "contain", // Fits the image inside the box without cropping
                marginBottom: "15px", // Adds space below the image
                display: "block", // Ensures the image doesn't overflow its container
              }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "15px",
              }}
            >
              {product.description}
            </p>
            <h3
              style={{
                fontSize: "1.3rem",
                color: "#28a745",
                fontWeight: "bold",
              }}
            >
              ${product.price}
            </h3>

            <button
              onClick={() => {
                deleteHandler(product.id);
              }}
              style={{
                backgroundColor: "#ff4d4d", // Red to indicate delete action
                color: "white", // White text
                border: "none", // No border
                borderRadius: "5px", // Rounded corners
                padding: "10px", // Padding inside the button
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
