import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Product, ProductInCart } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product: Product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              value={shoppingCart[product.id]?.count}
              onChange={(evento) => onProductCountChange(evento)}
            >
              <ProductImage
                img={product.img}
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map((product: ProductInCart) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              value={product.count}
              onChange={(evento) => onProductCountChange(evento)}
            >
              <ProductImage
                img={product.img}
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          );
        })}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
