import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div>
      <nav className="bg-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src={LOGO_URL}
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/contact"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/about"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>
                  <button className='text-white text-sm font-medium cursor-pointer'
                    onClick={() => {
                      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
