import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Homepage/Home";
import { Products } from "./pages/ProductsPage/products";
import { Header } from "./components/Header/navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import productss from "../src/data/productarray.json";
import ItemDetails from "./components/ItemDetails";
import { ShoppingCart } from "./pages/ShoppingCartPage/ShoppingCart";
import { Footer } from "./components/footer/footer";
import { Bag } from "react-bootstrap-icons";
export default function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Cart" element={<ShoppingCart />}></Route>
          {productss.map((product, id) => (
            <Route
              key={id}
              path={`/Products${id}`}
              //@ts-ignore
              element={<ItemDetails {...product} />}
            />
          ))}
        </Routes>
      </Container>
      <Button type="button" to="/Cart" as={NavLink}>
        <Bag id="bag" size={23} />
      </Button>
      <Footer />
    </ShoppingCartProvider>
  );
}

const Container = styled.section`
`;

const Button = styled.button`
  width:35px;
  height:35px;
  border-radius: 50%;
  position: fixed;
  bottom: 5%;
  left: 5%;
  padding: 5px;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: black;
  transition: all 0.4s ease-in-out;
  z-index: 10000;
`;
