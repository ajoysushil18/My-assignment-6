import { use, useState } from "react";
import ToolsCard from "./ToolsCard";
import CartContainer from "./CartContainer";

export default function ToolsContainer({ cart, setCart, productsPromise }) {
  const products = use(productsPromise);
  const [currentButton, setCurrentButton] = useState("products");

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-32 py-28">
      <h3 className="text-4xl font-black text-[#101727] leading-14">
        Premium Digital Tools
      </h3>
      <p className="text-gray-400 max-w-md text-center text-sm">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex mt-4 gap-2 rounded-full border border-solid border-gray-100 p-1">
        <button
          className={`btn ${currentButton === "products" ? "btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "btn-ghost hover:rounded-full"}`}
          onClick={() => setCurrentButton("products")}
        >
          Products
        </button>
        <button
          className={`btn ${currentButton === "carts" ? "btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "btn-ghost hover:rounded-full"}`}
          onClick={() => setCurrentButton("carts")}
        >
          Cart ({cart.length})
        </button>
      </div>

      <div className="mt-10 min-w-full p-10 border border-solid border-gray-300 rounded-md">
        {currentButton === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7">
            {products.map((product) => (
              <ToolsCard
                cart={cart}
                setCart={setCart}
                key={product.id}
                product={product}
              ></ToolsCard>
            ))}
          </div>
        ) : (
          <CartContainer cartList={cart} setCartList={setCart} />
        )}
      </div>
    </div>
  );
}
