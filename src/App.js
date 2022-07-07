import { useEffect } from 'react';
import './App.css';
import Header from "./Components/Header"
import Prouctcard from './Components/ProductCard'

function App() {
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>console.log(json))
  },[])
  return (
    <div className="App">
      <Header/>
      <div className='productsContainer'>
      <Prouctcard/>
      <Prouctcard/>
      <Prouctcard/>
      <Prouctcard/>
      <Prouctcard/>
      <Prouctcard/>
      </div>
    </div>
  );
}

export default App;
