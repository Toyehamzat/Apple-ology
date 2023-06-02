
import styled from "styled-components";
import { useShoppingCart } from "../../context/shoppingCartContext";
import  ItemDetails  from "../../components/ItemDetails";

export default function Product() {

  const {CartItem} =useShoppingCart()
  return (
    <Container>
      <div>
        {CartItem.map(item =>(
          <ItemDetails key={item.id} {...item}/>
        ))}
      
      </div>
    </Container>
  );
}

const Container = styled.div``;


