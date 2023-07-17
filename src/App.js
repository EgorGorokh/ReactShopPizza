import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from  "./pages/Cart";


const SearchContext=React.createContext();


function App() {
const [searchValue,setSearchValue]=React.useState('');
 

  return (
   // <div className="App">
    <div class="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div class="content">
        
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          
    
      </div>
      </SearchContext.Provider>
  
    </div>
  //  </div>
  );
}

export default App;
