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
  height: 70px;
  position: sticky;

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
  margin-left: 20px;

  @media (max-width: 700px) {
    font-size: 25px;
    margin-left: 80px;
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
  text-align: center;
  align-items: center;
  gap: 35px;
  @media (max-width: 700px) {
    gap: 20px;
  }

  @media (max-width: 550px) {
    gap: 17px;
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
  @media (max-width: 550px) {
    height: 10px;
    width: 10px;
    font-size: 10px;
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(39, 39, 39);
  gap: 10px;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  height: 30px;
  width: 60px;
  position: relative;

  @media (max-width: 700px) {
    height: 28px;
    width: 28px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #000000;
`;

export const DropdownMenuList = styled.ul`
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 100%;
  font-size: 15px;
  width: 100px;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgb(39, 39, 39);
  border: none;
  border-radius: 7px;
  animation: fadein ease 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: rgb(39, 39, 39);
    color: #818080ff;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  flex: 1 1;
`;
