import React from 'react';

export default function DonateButton() {
  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
      className="shadow h-16 flex-shrink"
    >
      <input type="hidden" name="hosted_button_id" value="86NXAHJRH2XBG" />
      <button
        className="w-full h-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium text-white bg-teal-600 hover:bg-gray-900 focus:outline-none focus:ring-gray transition duration-150 ease-in-out"
        type="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      >
        Donate
        <div className="px-2">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.47668 2L15.0001 9.5L7.47668 17"
              stroke="white"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M0 9.49927H15"
              stroke="white"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </button>
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
}
