import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from  "./pages/Cart";
//import { useDispatch } from "react-redux";


export  const SearchContext=React.createContext();


function App() {
  const [searchValue,setSearchValue]=React.useState('');
 // const dispatch = useDispatch()

  return (
  
    <div class="wrapper">
    
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
      <Header/>
      <div class="content">
        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          
    
      </div>
      </SearchContext.Provider>
  
    </div>

  );
}

export default App;
