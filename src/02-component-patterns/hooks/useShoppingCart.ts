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
          const productInCart: ProductInCart = oldShoppingCart[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productInCart.count + count, 0) > 0) {
            // El count después del incremento es mayor que cero
            productInCart.count += count;
            return {
              ...oldShoppingCart,
              [product.id]: productInCart,
            };
          } else {
            // El count después del incremento es cero o menor, eliminar el producto del oldshoppingcart
            delete oldShoppingCart[product.id];
            return { ...oldShoppingCart };
          }
          // if (count > 0) {
          //   return {
          //     ...oldShoppingCart,
          //     [product.id]: { ...product, count },
          //   };
          // } else {
          //   delete oldShoppingCart[product.id];
          //   return { ...oldShoppingCart };
          // }
        });
      };
    
    return {shoppingCart, onProductCountChange};
}