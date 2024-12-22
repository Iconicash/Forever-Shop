import { createContext, useState} from "react";
import { products } from "../assets/assets";
import { useEffect } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({children} ) => {
  // const [data, Setdata] = useState(products);

    const currency = '$'
    const delivery_fees = 10;
    const [search , setSearch] = useState('');
    const [showsearch , setShowSearch] = useState(false);
    const [cartItems ,setCartitems] = useState({});

      const addToCart = async (itemId,size) => {
          
        let cartData = structuredClone(cartItems);

          if (cartData[itemId]) {
            if(cartData[itemId[size]]) {
               cartData[itemId][size] += 1;
            }
            else{
              cartData[itemId][size] = 1 ;
            }
          }
          else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
          }
          setCartitems(cartData);
      }

      const getCartCount = () => {
        let totalCount = 
      }

  const value = {
      products , currency , delivery_fees ,
      search , setSearch , showsearch , setShowSearch,
      cartItems , addToCart
  }
  // console.log(value);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
