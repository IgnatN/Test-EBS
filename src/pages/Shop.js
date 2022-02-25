import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "context/ProductsContext";


const Shop = () => {

    const {wish, deleteWishList} = useContext(ProductsContext);


    const deleteElement = (id) =>{
        deleteWishList(id)

    }

    return ( 
        <div>
        
           {wish.length === 0 ? <h3>Nu exista produse adaugate</h3> :
            <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

            {wish.map(item => (
            <tr key={item.id}>
                   <td>{item.category.name}</td>
                   <td>{item.name}</td>
                   <td>{item.quantity}</td>
                   <td>{item.price}</td>
                   <td><button onClick={() => deleteElement(item.id)}>Delete</button></td>

               </tr>
            ))}
            </table>}
        </div>
     );
}
 
export default Shop;