import { toast } from "react-toastify";
import CartImage from "../assets/products/shopping-cart.png";

export default function CartContainer({ cartList, setCartList }) {
  const total = cartList.reduce((sum, item) => sum + item.price, 0);

  const checkOut = () => {
    toast.success("Your cart is sent to checkout");
    setCartList([]);
  };

  const handleDelete = (cartItem) => {
    const filteredItems = cartList.filter(cartItm => cartItm.name != cartItem.name)
    setCartList(filteredItems);
    toast.success("Item removed successfully");
  }

  return (
    <>
      {cartList.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <img src={CartImage} alt="cart icon" />
          <h3 className="text-xl font-black text-[#101727] leading-14">
            Empty Cart
          </h3>
          <p className="text-gray-400 max-w-md text-center text-sm">
            There is no item in the cart. Item you will add will appear here
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-[#101727] leading-14 mb-6">
            Your Cart
          </h3>
          {cartList.map((cartItem) => (
            <div
              key={cartItem.name}
              className="flex flex-row items-center justify-between gap-4 bg-[#F9FAFC] py-4 px-8 rounded-md mb-3"
            >
              <div className="flex gap-4">
                <div className="flex items-center justify-center bg-white p-3 rounded-full">
                  <img
                    src={
                      new URL(
                        `../assets/products/${cartItem.icon}`,
                        import.meta.url,
                      ).href
                    }
                    alt="Icon"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#101727] font-semibold text-xl">
                    {cartItem.name}
                  </h3>
                  <p className="text-gray-400 text-sm">${cartItem.price}</p>
                </div>
              </div>
              <button className="btn btn-ghost text-red-600" onClick={() => handleDelete(cartItem)}>Remove</button>
            </div>
          ))}
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-400 text-sm">Total</p>
            <p className="text-lg font-bold">${total}</p>
          </div>
          <button
            className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-6 rounded-full"
            onClick={checkOut}
          >
            Proceed to checkout
          </button>
        </>
      )}
    </>
  );
}
