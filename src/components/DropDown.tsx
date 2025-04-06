import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

const ProductDropdown = () => {
  return (
    <DropdownMenu.Root>
      {/* Trigger Button */}
      <DropdownMenu.Trigger asChild>
        <div className="flex items-center">
          {/* Wrap the "Our Products" in a Link */}
          <Link
            to="/products"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-300 flex items-center"
          >
            Loans
            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Content
        align="start"
        sideOffset={5}
        className="mt-2 bg-white rounded-md shadow-lg z-20 w-48 py-2"
      >
        <DropdownMenu.Item>
          <Link
            to="/personal-loans"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600"
          >
            Personal Loans
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link
            to="/business-loans"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-600"
          >
            Business Loans
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ProductDropdown;
