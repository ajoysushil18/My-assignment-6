import { useState } from "react";
import { toast } from "react-toastify";

export default function ToolsCard({ product, cart, setCart }) {
  const [status, setStatus] = useState("buy");
  
  const addToCart = (product) => {
    setStatus("checkout")
    setCart([...cart, product]);
    toast.success(`${product.name} is added to cart`);
  };

  return (
    <div className="card bg-base-100 shadow-sm h-full">
      <div className="card-body">
        <div className="flex justify-end">
          <span
            className={`badge rounded-full px-3 py-4 text-sm ${product.tagType === "Best Seller" ? "text-[#BB4D00] bg-[rgb(254,243,198)]" : product.tagType === "New" ? "text-[#0A883E] bg-[#DBFCE7]" : "text-[#9514FA] bg-[#E1E7FF]"}`}
          >
            {product.tag}
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-center p-2 rounded-full border border-solid border-gray-300 h-16 w-16">
            <img
              src={
                new URL(`../assets/products/${product.icon}`, import.meta.url)
                  .href
              }
              alt="Icon"
            />
          </div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-500 text-xs">{product.description}</p>
          <p className="text-xl text-gray-500">
            <span className="font-black text-2xl text-black">
              ${product.price}
            </span>
            /{product.period}
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-xs">
          {product.features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className={`btn btn-primary btn-block rounded-full ${status === "buy" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-green-600 border-0"}`}
            type="button"
            onClick={() => addToCart(product)}
          >
            {status === "buy" ? "Buy Now" : "Added to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
