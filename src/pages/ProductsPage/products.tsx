import styled from "styled-components";
import products from "../../data/productarray.json";
import { Col } from "react-bootstrap";
import { ProductItem } from "../../components/ProductItem";
export function Products() {
  return (

    <Container>
      <h1>Products.</h1>
      <Row>
        {products.map((product,id) => (
          <Col key={id}>
            <ProductItem {...product} />
          </Col> 
        ))}
      </Row>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 20px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

