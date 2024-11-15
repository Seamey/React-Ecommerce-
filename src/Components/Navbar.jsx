import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import Logo from "../assets/image.png";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-2">
            <img src={Logo} className="h-16 rounded-full" alt="Logo" />
            <span className="self-center text-violet-900 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shoppink
            </span>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/cart" className="relative">
              <BsCart className="text-2xl font-semibold" />
              <span className="absolute top-[-5px] left-6 text-red rounded-full text-sm pb-1.5">
                {cart.length}
              </span>
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-pink-600 rounded md:bg-transparent md:text-pink-600 md:p-0 md:dark:text-pink-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-600 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
