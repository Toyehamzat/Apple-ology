import products from "../../data/productarray.json";
import { Col } from "react-bootstrap";
import { ProductItem } from "../../components/ProductItem";
import { Row, Container,Route } from "./styles";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import { Footer } from "../../components/footer/footer";
export function Products() {
  return (
    <Container>
      <Route>
        <Link to="/" id="link">
          Home
        </Link>
        <ChevronRight size={11} /> <span className="grey">Shop Now </span>
      </Route>
      <Row>
        {products.map((product, id) => (
          <Col key={id}>
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
}
