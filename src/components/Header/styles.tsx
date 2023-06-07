import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
  background-color: black;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  height: 90px;

  @media (max-width: 700px) {
    padding: 20px 30px;

  }

  @media (max-width: 550px) {
    padding: 15px 15px;

  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 25px;

  }
  @media (max-width: 550px) {
    font-size: 24px;

  }
  @media (max-width: 370px) {
    font-size: 21px;

  }
`;

export const Icons = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  gap: 35px;
  @media (max-width: 700px) {
    gap: 20px;

  }

  @media (max-width: 550px) {
    gap: 14px;

  }
  @media (max-width: 370px) {
    gap: 11px;

  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const Cart = styled.button`
  position: relative;
`;
export const CartNumber = styled.div`
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12px;
  width: 12px;
  font-size: 11px;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  right: 0;
  color: black;
`;
