// * Zach
// * Nick
// * Megan

import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const ProductList = props => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/`).then(res => {
      console.log(res);
      setProductList(res.data.products);
    });
  }, []);

  return (
    <div>
      {productsList ? (
        productsList.map((product, i) => (
          <Link to={`/product/${product._id}`} key={i}>
            <p>
              {product.title}, ${product.price},{" "}
              {product.description.substring(0, 20)}
            </p>
          </Link>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ProductList;
