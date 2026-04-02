import Cart from "../assets/products/shopping-cart.png";

export default function Navbar({ cart }) {
  return (
    <div className="navbar bg-base-100 md:px-16 lg:px-32 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-semibold">Products</a>
            </li>
            <li>
              <a className="font-semibold">Features</a>
            </li>
            <li>
              <a className="font-semibold">Pricing</a>
            </li>
            <li>
              <a className="font-semibold">Testimonial</a>
            </li>
            <li>
              <a className="font-semibold">FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-black">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold">Products</a>
          </li>
          <li>
            <a className="font-semibold">Features</a>
          </li>
          <li>
            <a className="font-semibold">Pricing</a>
          </li>
          <li>
            <a className="font-semibold">Testimonial</a>
          </li>
          <li>
            <a className="font-semibold">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">
          <img src={Cart} alt="Cart icon" />
          <p>{cart.length}</p>
        </a>
        <a className="btn btn-ghost">Login</a>
        <a className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          Get Started
        </a>
      </div>
    </div>
  );
}
