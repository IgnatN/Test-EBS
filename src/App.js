import Products from "./pages/Products";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Shop from "./pages/Shop";
import React from "react";



function App(){
    return (

        <div>

              <Navbar/>

   
            <Routes>
                
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/produse" element={<Products/>}></Route>
            </Routes>


        
        </div>
    )
}

export default App;