import "./App.css";

//section components imports
import Items from "./components/Items";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

//recoil related imports
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>{/* Wrapping the root component to ensure Recoil state management is available throughout the component tree */}
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h1>Recoil Implementation</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Items Section</h1>
          <Items />
        </div>

        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Wishlist Section</h1>
          <Wishlist />
        </div>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Cart Section</h1>
          <Cart />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
