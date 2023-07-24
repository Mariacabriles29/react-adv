import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);
  console.log(initialValues?.count);
  /* con esta funcion incremento y decremento los valores de los productos */
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
    // con esta condicion && confirmo que onChange tiene algun valor
    onChange && onChange({ count: newValue, product });
  };
  //  se hace este useEffect para actualizar el onter del carrito de compras

  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);
  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
