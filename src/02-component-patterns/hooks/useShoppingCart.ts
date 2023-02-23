import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductCountChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        setShoppingCart((oldShoppingCart) => {          
          if (count > 0) {
            return {
              ...oldShoppingCart,
              [product.id]: { ...product, count },
            };
          } else {
            delete oldShoppingCart[product.id];
            return { ...oldShoppingCart };
          }
        });
      };
    
    return {shoppingCart, onProductCountChange};
}