type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  IncreaseCartQuantity: (id: number) => void;
  DecreaseCartQuantity: (id: number) => void;
  RemoveFromCart: (id: number) => void;
  CartQuantity: number;
  cartItems: CartItem[];
  TargetDownRef:any;
  TargetDownRef1:any;
  TargetUpRef:any;
  LikeQuantity:any;
  IncreaseLikeItems: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

import { ReactNode, createContext, useContext, useRef} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);

  const CartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const LikeQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function IncreaseCartQuantity(id: number) {
    return SetCartItems((currItem) => {
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
    return SetCartItems((currItem) => {
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
  function RemoveFromCart(id: number) {
    SetCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function IncreaseLikeItems(id: number) {
    return SetCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  const TargetDownRef = useRef<HTMLDivElement>(null);
  const TargetDownRef1 = useRef<HTMLDivElement>(null);
  const TargetUpRef = useRef<HTMLDivElement>(null);
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        IncreaseCartQuantity,
        DecreaseCartQuantity,
        RemoveFromCart,
        cartItems,
        CartQuantity,
        TargetDownRef,
        TargetDownRef1,
        TargetUpRef,
        LikeQuantity,
        IncreaseLikeItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
