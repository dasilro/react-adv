import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  //const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ count, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage
              img={product.img}
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button onClick={() => increaseBy(2)} hidden={isMaxCountReached}>
              +2
            </button>
            <span>{`count ${count}`}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
