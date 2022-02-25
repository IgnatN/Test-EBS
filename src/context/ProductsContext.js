import useFetch from "../hook/useFetch";
import React, { useEffect, useState, createContext } from "react";


export const ProductsContext = createContext();

const ContextProducts = (props) => {

    const {data: products} = useFetch("http://localhost:3001/api/products");
    //const {data: categories} = useFetch("http://localhost:3001/api/product/categories/");
    
    const [product, setProducts] = useState([]);
    const [category, setCategory] = useState();
    const [wish, setWish] = useState([]);
    
    useEffect(() =>{
        setProducts(products)
        
    }, [products])

    //add products to wishList
   const addWishList = (item) =>{
       let idProdus = wish.map(item => item.id)

    if(idProdus.includes(item.id)){
        return;
    }else{
        setWish(prevState => [...prevState, {...item, quantity: 1}])

    }

   }

   //delete a products inside wishList

   const deleteWishList = (idProduct) =>{
       let newWishList = wish.filter(item => item.id !== idProduct);

       setWish(prevState => newWishList)
   }

   //edit quantity

    return ( 
        <ProductsContext.Provider value={{product, wish, addWishList, deleteWishList}}>
            {props.children}
        </ProductsContext.Provider>

     );
}
 
export default ContextProducts;