import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from "../components/data/product";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log("onProductCountChange", count, product);
    console.log({ count });
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        // elimancion de un objeto mediante desestruracion
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        console.log({ toDelete });
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
