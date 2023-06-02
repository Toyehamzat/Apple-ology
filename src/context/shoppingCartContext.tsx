type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  IncreaseCartQuantity: (id: number) => void;
  DecreaseCartQuantity: (id: number) => void;
  RemaoveFromCart: (id: number) => void;
//   OpenCart: () => void;
//   CloseCart: () => void;
//   CartQuantity:number
  CartItem:CartItem[]
};

type CartItem = {
  id: number;
  quantity: number;
};

import { ReactNode, createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [CartItem, SetCartItem] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return CartItem.find((item) => item.id === id)?.quantity || 0;
  }
  function IncreaseCartQuantity(id: number) {
    return SetCartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function DecreaseCartQuantity(id: number) {
    return SetCartItem((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function RemaoveFromCart(id: number) {
    SetCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        IncreaseCartQuantity,
        DecreaseCartQuantity,
        RemaoveFromCart,
        CartItem,
      }}
    >
      {children}
     
    </ShoppingCartContext.Provider>
  );
}
