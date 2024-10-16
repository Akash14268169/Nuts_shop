import React from "react"
import ReactDom from "react-dom/client"
import './index.css';
import About from "./components/About"
import Header from './components/Header'
import Search from './components/Search'
import Product from './components/Product'
import Contact from './components/Contact'
const root =ReactDom.createRoot(document.getElementById("root"))
root.render(
  <div>
    <Header></Header>
    <Search></Search>
    <Product></Product>
    <About></About>
    <Contact></Contact>
    
  </div>
)