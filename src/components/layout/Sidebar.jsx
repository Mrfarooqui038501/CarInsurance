import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Leads', icon: UserGroupIcon, path: '/leads' },
    { name: 'Quotes', icon: DocumentTextIcon, path: '/quotes' },
    { name: 'Policies', icon: DocumentTextIcon, path: '/policies' },
    { name: 'Analytics', icon: ChartBarIcon, path: '/analytics' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="mt-8">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  location.pathname === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
