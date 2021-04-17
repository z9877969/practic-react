import CardProducts from "../CardProducts/CardProducts";
import foods from '../../data/foods.json';
import "./App.css";

const App = () => {
  
  return (
    <>
      <h1>App</h1>
      <CardProducts products={foods} />
    </>
  );
};

export default App;
