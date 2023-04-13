import "./App.css";
import { Button, MyLabel } from "dsr-my-storybook-components";

function App() {
  return (
    <div className="App App-header">
      <MyLabel label={"Hola Mundo"} size="h1" />
      <Button label="Click Me" primary />
    </div>
  );
}

export default App;
