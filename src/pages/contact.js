/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import SEO from '../components/seo';

export default function ContactPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form className="mx-auto md:w-1/2">
          <p className="mb-8 leading-loose">
            Here is an example of a form built using the official Tailwind CSS
            Custom Forms plugin.{` `}
            <a
              className="font-bold text-gray-700 no-underline"
              href="https://github.com/tailwindcss/custom-forms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the docs
            </a>
            .
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Last Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="Murray"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
          />

          <button
            type="button"
            className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
