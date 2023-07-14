import styled from "styled-components";
import { useShoppingCart } from "../../context/shoppingCartContext";
import ItemDetails from "../../components/ItemDetails";

export default function Product() {
  const { cartItems } = useShoppingCart();
  return (
    <Container>
      <div>
        {cartItems.map((item) => (
          //@ts-ignore
          <ItemDetails key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div``;
