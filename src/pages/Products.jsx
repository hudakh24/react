import { /*useEffect,*/ useState } from "react";
//import axios from "axios";

const ProductsPage = () => {
<<<<<<< HEAD
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [userInput, setUserInput] = useState(""); //store input into state

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
=======
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.",
      category: "men's clothing",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on t…uld be reviewed below on the product description.",
      category: "men's clothing",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.",
      category: "jewelery",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.",
      category: "jewelery",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamo…agement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system",
      category: "electronics",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)",
      category: "electronics",
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer…e optimized performance and enhanced reliability.",
      category: "electronics",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere F… capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS …egree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR…inate motion blur, ghosting, and reduce input lag",
      category: "electronics",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates",
      category: "women's clothing",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long …djustable Drawstrings give it a real styled look.",
      category: "women's clothing",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do …ves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleev…Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
    },
  ]);
  const [searchedProducts, setSearchedProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.",
      category: "men's clothing",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on t…uld be reviewed below on the product description.",
      category: "men's clothing",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.",
      category: "jewelery",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.",
      category: "jewelery",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamo…agement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system",
      category: "electronics",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)",
      category: "electronics",
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer…e optimized performance and enhanced reliability.",
      category: "electronics",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere F… capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS …egree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR…inate motion blur, ghosting, and reduce input lag",
      category: "electronics",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates",
      category: "women's clothing",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long …djustable Drawstrings give it a real styled look.",
      category: "women's clothing",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do …ves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleev…Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
    },
  ]);
  const [userInput, setUserInput] = useState(""); //store input into state

  // const fetchProducts = async () => {
  //   try {
  //     // const response = await axios.get("https://fakestoreapi.com/products");
  //     // console.log(response.data);
  //     // setProducts(response.data); // Update state with the fetched products
  //     setSearchedProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
>>>>>>> 90224203b9b3167d4ee983f08c54ded6592090b3

  // useEffect(() => {
  //   // fetchProducts();
  // }, []);

  const deleteHandler = (id) => {
    const updatedItems = products.filter((currentProduct) => {
      return currentProduct.id !== id;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
    setUserInput("");
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    // const searchInput = e.target.value;
    setUserInput(e.target.value);
    const searchResult = products.filter((item) => {
      if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
        return true;
      }
    });
    console.log(searchResult);
    setSearchedProducts(searchResult);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <h1>Products Page</h1>
      <input
        value={userInput}
        onChange={searchHandler}
        placeholder="Search the item"
      ></input>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {searchedProducts.map((product) => (
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
            {/* <img
              src={product.image}
              alt={product.title}
              style={{
                width: "200px", // Fixed width for all images
                height: "200px", // Fixed height for all images
                objectFit: "contain", // Fits the image inside the box without cropping
                marginBottom: "15px", // Adds space below the image
                display: "block", // Ensures the image doesn't overflow its container
              }}
            /> */}
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
