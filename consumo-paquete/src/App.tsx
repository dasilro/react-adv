import "./App.css";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "dsr-product-card";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

function App() {
  return (
    <div className="App App-header">
      <h1>Hola Mundo!</h1>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
