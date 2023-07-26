import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../components/data/product";

const product = products[0];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      {/* mostrando el array que contiene mis dos productos
       */}

      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 6,
          // maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
