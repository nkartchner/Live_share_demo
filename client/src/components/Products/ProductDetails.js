import React, { useEffect, useState } from "react";
import axios from "axios";

// ! Phillip
// ! Morgan
// ! Alex

const ProductDetails = props => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log("Firing the axios method. Here is the props id ==> ", props.id);
    axios
      .get(`http://localhost:8000/api/product/${props.id}`)
      .then(res => {
        console.log(res);
        setProduct(res.data);
      })
      .catch(error =>
        console.log(
          "Something went wrong in the product details file..... ",
          error
        )
      );
  }, []);
  return (
    <div>
      {product !== null ? (
        <div>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

// we're passing in an id for a product?
// I imagine all we are doing is rendering the description of the product thats what i was thinking too
export default ProductDetails;
