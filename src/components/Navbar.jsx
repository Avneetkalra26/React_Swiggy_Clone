import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9418/9418666.png"
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </a>
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
