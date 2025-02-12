import React from "react";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      <img
        src="../../public/dhurbatara-logo.png"
        className="h-12 md:h-24" 
        alt="Dhurbatara Logo"
      />
    </a>


    <div className="flex items-center md:order-2 space-x-3">
  <div className="flex items-center bg-[#66E7EC] dark:bg-[#4DBCC8] rounded-lg p-2 md:p-3">
    {/* Profile Picture */}
    <img
      src="https://randomuser.me/api/portraits/women/3.jpg"
      className="h-8 w-8 md:h-10 md:w-10 rounded-full mr-2"
      alt="User Profile"
    />
    {/* User Name */}
    <span className="text-sm md:text-base font-medium text-white dark:text-gray-900">
      John Doe
    </span>
  </div>
</div>

  </div>
  
</nav>
  );
};

export default Header;
