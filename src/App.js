import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from  "./pages/Cart";





function App() {

 

  return (
    <div className="App">
    <div class="wrapper">
    <Header />
      <div class="content">
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          
    
      </div>
    </div>
    </div>
  );
}

export default App;
