import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Car Insurance CRM</h1>
      <div className="flex items-center space-x-4">
        <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        <UserCircleIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
