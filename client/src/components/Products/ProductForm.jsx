import React, { useState } from "react";
import axios from "axios";

const ProductForm = props => {
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    description: "",
    submitted: false
  });

  const onChangeHandler = event => {
    event.preventDefault();
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/product/new", {
        title: formState.title,
        price: formState.price,
        description: formState.description
      })
      .then(newProductData => console.log(newProductData))
      .catch(error => console.log("Something went wrong ", error));
  };

  return (
    <div>
      {}
      <form onSubmit={onSubmitHandler}>
        <br />
        <label>
          Title
          <input type="text" name="title" onChange={onChangeHandler} />
        </label>
        <br />
        {formState.title.length > 0 && formState.title.length < 2 && (
          <span>Must be at least 2 Characters!</span>
        )}
        <label>
          Price
          <input type="number" name="price" onChange={onChangeHandler} />
        </label>
        <br />
        {isNaN(formState.price) && <span>Price must be a number</span>}
        <label>
          Description
          <textarea name="description" onChange={onChangeHandler}></textarea>
        </label>
        <br />
        {formState.description.length > 0 &&
          formState.description.length < 10 && (
            <span>Description must be 10 characters or more</span>
          )}
        <button type="submit">Add Product</button>
      </form>

      <div>
        <p>
          Title: <span>{formState.title}</span>
        </p>
        <p>
          Price: <span>{formState.price}</span>
        </p>
        <p>
          Description: <span>{formState.description}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductForm;
