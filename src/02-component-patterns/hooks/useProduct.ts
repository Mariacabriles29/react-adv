import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  /* con esta funcion incremento y decremento los valores de los productos */
  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    counter,
    increaseBy,
  };
};
