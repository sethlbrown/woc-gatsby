import React, { useState } from 'react';
import { Link } from 'gatsby';
import wocLogo from '../images/woc_logo.svg';
import DonateButton from './donate-button';

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8 xl:pr-0 xl:pl-8 mx-auto">
        <Link to="/" onClick={() => toggleExpansion(!isExpanded)}>
          <h1 className="flex h-16 items-center text-black no-underline">
            <img
              alt="Bike Project Logo"
              src={wocLogo}
              className="lg:h-14 lg:w-52"
            />
            <span className="sr-only">Way of Compassion Bike Project</span>
          </h1>
        </Link>
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
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } h-screen w-full lg:h-auto lg:flex lg:flex-grow lg:items-center lg:ml-16 lg:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About Us`,
            },
            {
              route: `/programs`,
              title: `Our Programs`,
            },
            {
              route: `/calendar`,
              title: `Events`,
            },
            {
              route: `/gallery`,
              title: `Photos & Videos`,
            },
            {
              route: `/contact`,
              title: `Contact Us`,
            },
          ].map((link) => (
            <div
              className="
              flex 
              items-center 
              h-16 
              lg:border-t-4 
              lg:border-teal-400 
              lg:border-solid 
              lg:border-opacity-0 
              hover:border-opacity-100 
              hover:bg-gray-200
              transition 
              duration-150 
              ease-in-out"
            >
              <Link
                className="px-4 text-base font-bold hover:font-extrabold leading-5 xl:text-lg text-gray-800 focus:text-black focus:outline-none lg:mt-0" // block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6
                key={link.title}
                to={link.route}
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="hidden xl:block">
          <DonateButton />
        </div>
      </div>
    </header>
  );
}
