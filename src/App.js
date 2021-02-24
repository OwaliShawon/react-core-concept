import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

var person1 = {
  name: "kakuli",
  job: "singer"
}
var person2 = {
  name: "Mahfuj",
  job: "Director"
}

function App() {
  const products = [
    { name: 'Phososhop', price: '$100' },
    { name: 'Illustrator', price: '$90' },
    { name: 'Lightroom', price: '$70' },
    { name: 'Reader', price: '$10' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users></Users>
        <Counter></Counter>
        <h1>Products List</h1>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        <h1>price List</h1>
        <ul>
          {products.map(product => <li>{product.price}</li>)}
        </ul>


        <h1>Product Details</h1>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>

        <p>Added Emmet by WALL-E</p>
        <p>{person1.name} is a {person1.job}</p>
        <p>{person2.name} is a {person2.job}</p>

        <h3>i am a react person</h3>
        <Person name="Rubel Nayok" nayika="mouyuri"></Person>
        <Person name="jasim" nayika="sabana"></Person>
        <Person name="manna" nayika="mousumi"></Person>
        <Person name="kodom ali" nayika="chokina"></Person>

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(110);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Effect: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} <br></br> {user.email}</li>)
          
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '400px',
    width: '1000px',
    float: 'left',
    margin: '20px'
  }
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    padding: '10px',
    width: '500px'
  }
  return (
    <div style={personStyle}>
      <p>Name: {props.name}</p>
      <p>Hero of the Year</p>
      <p>Nayika: {props.nayika}</p>
      <p>Heroin of the year</p>

    </div>

  )
}

export default App;
