import React from 'react';
import './App.css';
import ProductForm from './components/Products/ProductForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Live Share Test</h1>
        <p>Contributors</p>
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
        <ProductForm />
      </header>
    </div>
  );
}

export default App;
