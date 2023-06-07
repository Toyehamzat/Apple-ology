import styled from "styled-components";
export const Container = styled.section`
  margin-top: 20px;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 770px) {
    padding: 0 30px;
  }
  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Header = styled.div``;

export const Route = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  width: 45%;
  height: 600px;
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  padding-right: 10px;


  @media (max-width: 770px) {
    width: 100%;
    height: auto;
    margin-bottom: 25px;
    margin-top: 25px---;
  }
`;

export const Right = styled.div`
  width: 55%;
  display: flex;
  justify-content: right;
  position: relative;

  @media (max-width: 770px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const SummaryContainer = styled.div`
  height: 550px;
  width: 500px;
  background-color: #e2eef4;
  padding: 40px 40px;
  position: relative;
  border-radius: 15px;
`;

export const Input = styled.input`
  padding-top: 20px;
  background: transparent;
  outline: none;
  width: 200px;
  border-left: none;
  border-right: none;
  border-top: 1px black;
  margin-bottom: 60px;
`;
export const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 600;
`;

export const EstimatedTax = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;

  @media (max-width: 770px) {
    font-size: 16px;
  }
`;
export const EstitmatedShipping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;

  @media (max-width: 770px) {
    font-size: 16px;
  }
`;
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30px;
  margin-bottom: 25px;

  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const CheckOutBtn = styled.button`
  width: 210px;
  padding: 18px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  font-size: 17px;
  font-weight: 600;
  margin: auto;
`;

export const PayPalBtn = styled.button`
  width: 210px;
  padding: 10px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #b4b4b4;
  margin: auto;
`;
