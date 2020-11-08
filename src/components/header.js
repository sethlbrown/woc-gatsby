import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="">
      <section>
        <div className="bg-gray-900 flex h-10 items-center justify-end max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 text-gray-200">
          <span className="font-thin mr-1">P:</span>
          <a href="tel:970-340-8151">970.340.8151</a>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-end max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          type="button"
          className="md:hidden flex items-center justify-center rounded-md text-teal-500 focus:outline-none transition duration-150 ease-in-out"
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
          } md:block md:items-center w-full md:w-auto`}
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
            <Link
              className="mt-2 block px-3 py-2 rounded-md text-base font-medium text-gray-900  hover:bg-gray-200 focus:outline-none focus:text-white focus:bg-gray-900 transition duration-150 ease-in-out md:inline-block md:mt-0 md:ml-6" // block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
