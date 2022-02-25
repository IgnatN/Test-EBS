import useFetch from "hook/useFetch";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "./Products.css";
const Products = () => {


    //state

    const [produse, setProducts] = useState([]);
    const {product, addWishList} =  useContext(ProductsContext);

  //add products
   useEffect(() => {
    setProducts(product) 
   }, [product])


   //sort products category
   const sortCategory = (e) =>{
       let value = e.target.value;

    if(value == "asc"){
        let sortByCategoryAsc =  product.sort((a, b) =>{
            const categoryA = a.category.name.toUpperCase();
            const categoryB = b.category.name.toUpperCase();
      
          if(categoryA > categoryB) return 1;
          if(categoryA < categoryB) return -1;
          return 0;
     
          
        });
 
 
        setProducts([...sortByCategoryAsc])
    }else{
        let sortByCategoryDesc =  product.sort((a, b) =>{
            const categoryA = a.category.name.toUpperCase();
            const categoryB = b.category.name.toUpperCase();
      
          if(categoryA > categoryB) return -1;
          if(categoryA < categoryB) return 1;
          return 0;
         })
  
  
         setProducts([...sortByCategoryDesc])
    }
   }


   //sort products price

   const sortPrice = (e) =>{

    let value = e.target.value;

    if(value == "asc"){
        let sortByCategoryAsc =  product.sort((a, b) =>{
           
          if(a.price > b.price) return 1;
          if(a.price < b.price) return -1;
          return 0;
     
          
        });
 
 
        setProducts([...sortByCategoryAsc])
    }else{
        let sortByCategoryDesc =  product.sort((a, b) =>{
          
      
          if(a.price > b.price) return -1;
          if(a.price < b.price) return 1;
          return 0;
         })
  
  
         setProducts([...sortByCategoryDesc])
    }
   }


   //add products to wishList


   const addProducts = (item) =>{
     addWishList(item)


     
   }

   return ( 
        
        
            <div>
            
            <table>

            <thead>
                <tr>
                <th>Category<sup><select onChange={sortCategory} >
                                          <option   value="asc">Crescator</option>
                                          <option  value="desc">Descrescator</option>
                                                                
                                 </select></sup>
                 </th>
                <th>Name</th>
                <th>Price<sup><select onChange={sortPrice} >
                                          <option   value="asc">Crescator</option>
                                          <option  value="desc">Descrescator</option>
                                                                
                                 </select></sup>
                 </th>
                </tr>
            </thead>
                {produse.map(item => (
               <tr key={item.id} onClick={() => addProducts(item)}>
                   <td>{item.category.name}</td>
                   <td>{item.name}</td>
                   <td>{item.price}</td>

               </tr>
            ))}
            </table>
            </div>
        
        
     );
};
 
export default Products;