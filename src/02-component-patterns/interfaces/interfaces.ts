import { ReactElement } from "react";

/*Otra forma de definir las Props */
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  ({ title }: { title?: string }): JSX.Element;
  ({ img }: { img?: string }): JSX.Element;
  ProductButtons: () => JSX.Element;
}
