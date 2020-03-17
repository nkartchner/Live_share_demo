import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import ProductDetails from "./components/Products/ProductDetails";
import ProductListRoute from "./components/Products/ProductListRoute";

// * ROUTING
// ! Millie
// ! David
// ! Ron

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the dojo Show</h1>
        <Link to="/products">Home</Link>
        <ul>
          <li>Alex</li>
          <li>Nathan</li>
          <li>Phillip</li>
          <li>Millie</li>
          <li>Zach</li>
          <li>Meg</li>
          <li>Dylan</li>
          <li>Ron</li>
          <li>Morgan</li>
          <li>Nick</li>
        </ul>

        <Router>
          <ProductDetails path="product/:id" />
          <ProductListRoute path="products/" />
        </Router>
      </header>
    </div>
  );
}

export default App;

// Do we have a timeline for rejoining the main zoom room?
// Waiting for response from Nathan
