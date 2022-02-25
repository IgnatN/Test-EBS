import React, { useContext, useState } from "react";
import { BrowserRouter, Link, Routers, Route } from "react-router-dom";
import { ProductsContext } from "context/ProductsContext";

const Navbar = () => {


    const {wish, deleteWishList} = useContext(ProductsContext);
    const [wishList, setWishList] = useState(false);

    //delete

    const deleteItem = (id) =>{
        deleteWishList(id)
    }

    //add shop
    // const addShopItem = () =>{

    // }

    return ( 

        <header>

            {wishList && <div>

                  <h4>WishList</h4>
                  {wish.length == 0 && <h4>Produse nu exista inca</h4>}

                  {wish.map(item =>(
                      <div key={item.id}>
                          <ul>
                              <li>{item.name}</li>
                              <li>{item.category.name}</li>
                              <li>{item.price}</li>
                          </ul>
                          <button onClick={() => deleteItem(item.id)}>Delete</button>
                          <hr />
                      </div>
                  ))}
                  
                 </div>
            }   

            <nav>
                <ul>
                  
                   <li><Link to="/produse">Products</Link></li>
                   <li><Link to="/shop">My Shop</Link></li>
                   <li onClick={() => setWishList(!wishList)}>WishList {wish.length}</li>

                    
                </ul>
            </nav>


        </header>
     );
}
 
export default Navbar;