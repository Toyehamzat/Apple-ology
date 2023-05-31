import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Homepage/Home";
import { Product } from "./pages/ProductPage/Product";
import { Contact } from "./pages/ContactPage/Contact";
import { Header } from "./components/Header/navbar";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Container>
    </>
  );
}

const Container = styled.section`
height: 100vh;
position: relative;
`;
