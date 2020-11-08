import React, { useState } from 'react';
import { Link } from 'gatsby';
import wocLogo from '../images/woc_logo.svg';
import Nav from './nav';

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-2 sm:px-4 lg:px-8 xl:pr-0 xl:pl-8 mx-auto">
        <Link to="/">
          <h1 className="flex h-16 items-center text-black no-underline">
            <img alt="Bike Project Logo" src={wocLogo} />
          </h1>
        </Link>
        <Nav />
        <button
          type="button"
          className="lg:hidden flex items-center justify-center rounded-md text-teal-500 focus:outline-none transition duration-150 ease-in-out"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-10 h-10"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              className={`${!isExpanded ? `inline-flex` : `hidden`}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={`${!isExpanded ? `hidden` : `inline-flex`}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="hidden xl:block shadow h-16 flex-shrink">
          <a
            href="https://www.paypal.com/donate?token=Pe04TVOdFBnP9reQgy_worFEVWaYb2CBiiWP-DqiiLOHGOHNPN90uWbrwCvNTwGLgk7HwsVgqA5LZUko"
            className="w-full h-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-teal-600 hover:bg-gray-900 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
          >
            Donate a Bike{' '}
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2307997/arrow.svg"
              className="px-2"
              alt="arrow"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
