import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import { useCallback, useContext, useState } from "react";

export interface Props {
  className?: string;
  activeBtnClass?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //TODO: maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  // TODO: isMaxReached =useCallback,dependencias [count, maxCount]
  // True si el count ===maxCount
  // False si no lo es

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
