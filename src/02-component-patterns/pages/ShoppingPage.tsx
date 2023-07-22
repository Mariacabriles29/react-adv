import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../components/data/product";
export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* mostrando el array que contiene mis dos productos
         */}
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            // en este value sincronizo el carrito de comprar con mi tarjeta
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className=" text-bold" activeClass="active " />
            <ProductButtons className="custom-buttons " />
          </ProductCard>
        ))}
      </div>
      {/* Creacion del carrito de compras  */}
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            key={key}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />

            <ProductButtons
              className="custom-buttons "
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
