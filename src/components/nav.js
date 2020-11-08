import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav
      className={`${
        isExpanded ? `block` : `hidden`
      } h-screen w-full lg:h-auto lg:flex lg:flex-grow lg:items-center lg:ml-6 lg:w-auto`}
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
          title: `Photos and Videos`,
        },
        {
          route: `/contact`,
          title: `Contact Us`,
        },
      ].map((link) => (
        <div className="flex items-center h-16 lg:border-l lg:border-gray-200 lg:border-solid hover:bg-gray-200 transition duration-150 ease-in-out">
          <Link
            className="px-4 text-base font-medium leading-5 xl:text-large text-gray-800 focus:text-black focus:outline-none hover:bg-gray-200 lg:mt-0 lg:ml-6" // block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6
            key={link.title}
            to={link.route}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </nav>
  );
}
