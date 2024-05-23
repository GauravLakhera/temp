import React from "react";
import logo from "../logosvg.svg";
import user from "../images/circle-user.png";
import store from "../images/marketplace-store.png";
import cart from "../images/cart-shopping-fast.png";

function Header() {
  return (
    <header className="text-black text-xs md:text-sm p-4">
      <div className="flex items-center justify-start md:justify-between">
        <div className="flex items-center content-center space-x-4">
          <img src={logo} className="w-20 md:w-full" alt="Flipkart Logo" />
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full p-2 rounded"
          />
        </div>

        <div className="flex md:space-x-10 space-x-2">
          <div className="relative group">
            <div className="flex items-center">
              <img src={user} className="w-5 mr-2 h-5 md:w-6 md:h-6" alt="User" />
              <a href="#" className="hover:underline">
                Account
              </a>
            </div>
            <div className="absolute z-10 left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-2 rounded">
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                My Profile
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Super Coin Zone
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Flipkart Plus Zone
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Orders
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Coupons
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Gift Cart
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center">
              <img src={cart} className="w-0 mr-2 md:w-6" alt="Cart" />
              <a href="#" className="hover:underline">
                Cart
              </a>
            </div>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-2 rounded">
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                View Cart
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Checkout
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center">
              <img src={store} className="w-0 mr-2 md:w-6" alt="Store" />
              <a href="#" className="hover:underline">
                Become a Seller
              </a>
            </div>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-2 mt-2 rounded">
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Sell on Flipkart
              </a>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:bg-gray-200"
              >
                Seller Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
