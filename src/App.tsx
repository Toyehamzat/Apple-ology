import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Homepage/Home";
import { Products } from "./pages/ProductsPage/products";
import { Header } from "./components/Header/navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import productss from "../src/data/productarray.json";
import ItemDetails from "./components/ItemDetails";
export default function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          {productss.map((product, id) => (
            <Route key={id} path={`/Products${id}`} element={<ItemDetails {...product} />} />
          ))}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

const Container = styled.section`
  height: 100vh;
  position: relative;
`;
