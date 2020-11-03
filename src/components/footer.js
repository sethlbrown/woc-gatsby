/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import wocLogo from '../images/woc-logo.png';

export default function Footer() {
  return (
    <div>
      <div className="bg-white max-w-7xl -mb-px mx-auto px-2 sm:px-4 lg:px-8">
        <svg
          width="79"
          height="44"
          viewBox="0 0 79 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52.2433 0.000183294C52.1352 -0.00136103 52.0272 0.00685433 51.9205 0.0247897L45.3452 0.0511458C45.1073 0.0479493 44.8712 0.0921786 44.6505 0.181231C44.4299 0.270284 44.2292 0.402347 44.0602 0.569793C43.8911 0.73724 43.7571 0.936678 43.666 1.15646C43.5749 1.37625 43.5284 1.612 43.5294 1.84993C43.5303 2.08785 43.5787 2.32319 43.6716 2.54224C43.7644 2.76129 43.9 2.95965 44.0704 3.12574C44.2408 3.29183 44.4425 3.42231 44.6638 3.5096C44.8852 3.59688 45.1217 3.63926 45.3596 3.63416L50.9893 3.61174L53.4727 10.0854H31.4002V9.18673V8.57862H34.3479C34.5858 8.58284 34.8222 8.53962 35.0433 8.45149C35.2644 8.36335 35.4656 8.23205 35.6354 8.06528C35.8052 7.8985 35.94 7.69959 36.032 7.48014C36.1241 7.26068 36.1715 7.02509 36.1715 6.78711C36.1715 6.54914 36.1241 6.31354 36.032 6.09409C35.94 5.87463 35.8052 5.67572 35.6354 5.50895C35.4656 5.34217 35.2644 5.21087 35.0433 5.12274C34.8222 5.0346 34.5858 4.99138 34.3479 4.9956H29.9012C29.7089 4.96401 29.5127 4.96401 29.3203 4.9956H24.8691C24.6312 4.99138 24.3948 5.0346 24.1737 5.12274C23.9527 5.21087 23.7514 5.34217 23.5816 5.50895C23.4119 5.67572 23.277 5.87463 23.185 6.09409C23.0929 6.31354 23.0455 6.54914 23.0455 6.78711C23.0455 7.02509 23.0929 7.26068 23.185 7.48014C23.277 7.69959 23.4119 7.8985 23.5816 8.06528C23.7514 8.23205 23.9527 8.36335 24.1737 8.45149C24.3948 8.53962 24.6312 8.58284 24.8691 8.57862H27.8169V9.18673V11.1661L22.2481 16.2275C19.9918 14.7416 17.3011 13.8756 14.4121 13.8756C6.45704 13.8756 0 20.4372 0 28.4464C0 36.4635 6.45713 43.0264 14.4121 43.0264C21.7655 43.0264 27.8381 37.4186 28.7147 30.2381H37.7308C38.1047 30.2955 38.4873 30.2331 38.8236 30.0597C39.1599 29.8864 39.4326 29.6111 39.6028 29.2732L55.5444 14.7837L56.3572 16.3855C52.5324 19.0129 50.0145 23.447 50.0145 28.4464C50.0145 36.465 56.4794 43.0264 64.4266 43.0264C72.3817 43.0264 78.8384 36.4635 78.8384 28.4464C78.8384 20.4372 72.3817 13.8756 64.4266 13.8756C62.7122 13.8756 61.067 14.1814 59.5406 14.7407L57.7187 11.1492L53.9973 1.44846C53.9038 1.00383 53.6448 0.611324 53.2728 0.350414C53.2487 0.332902 53.2241 0.315957 53.1992 0.29967C53.1912 0.294651 53.1833 0.289692 53.1753 0.284797C52.8969 0.105604 52.5743 0.00705691 52.2433 7.39319e-05V0.000183294ZM32.5984 13.6686H51.444L38.4914 25.4413L32.5984 13.6686ZM29.154 14.7927L35.0918 26.6549H28.7145C28.3361 23.5613 26.9915 20.7597 24.9945 18.5731L29.154 14.7927ZM14.4121 17.4588C16.2498 17.4588 17.9782 17.9191 19.4921 18.7324L10.2631 27.1208C9.99557 27.364 9.80794 27.6826 9.72482 28.0344C9.64171 28.3863 9.66699 28.7551 9.79735 29.0924C9.92771 29.4296 10.157 29.7195 10.4552 29.924C10.7534 30.1285 11.1065 30.238 11.468 30.2381H25.0987C24.2615 35.4826 19.8065 39.4431 14.4121 39.4431C8.41842 39.4431 3.58329 34.5537 3.58329 28.4464C3.58329 22.3494 8.41833 17.4588 14.4121 17.4588ZM64.4266 17.4588C70.4204 17.4588 75.2552 22.3494 75.2552 28.4464C75.2552 34.5538 70.4204 39.4431 64.4266 39.4431C58.4432 39.4431 53.5978 34.5522 53.5978 28.4464C53.5978 24.8078 55.3246 21.5984 57.9891 19.602L62.8826 29.2479C62.9868 29.4614 63.1325 29.6521 63.3111 29.8088C63.4897 29.9655 63.6977 30.0851 63.9229 30.1607C64.1482 30.2362 64.3863 30.2662 64.6232 30.2488C64.8602 30.2315 65.0914 30.1673 65.3033 30.0598C65.5152 29.9523 65.7036 29.8037 65.8576 29.6228C66.0115 29.4418 66.1279 29.232 66.2 29.0056C66.2721 28.7792 66.2985 28.5407 66.2775 28.304C66.2566 28.0673 66.1888 27.8372 66.0781 27.627L61.1743 17.9605C62.2008 17.6346 63.2932 17.4588 64.4266 17.4588ZM22.3595 20.9679C23.7715 22.5125 24.7488 24.4728 25.0981 26.6549H16.1028L22.3595 20.9679Z"
            fill="#1A2328"
          />
        </svg>
      </div>
      <footer className="bg-gray-900 max-w-7xl mx-auto px-4 sm:px-8 w-screen text-gray-100">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4">
          <div className="mt-12 sm:mt-8 w-full sm:col-span-1">
            <h4 className="text-gray-100 leading-5 font-semibold tracking-wider">
              Address
            </h4>
            <ul className="font-thin mt-2 tracking-wider">
              <li className="mt-2">520 S. 3rd St.</li>
              <li className="mt-2">Carbondale,</li>
              <li className="mt-2">CO 81623</li>
              <li className="mt-2">
                <a href="tel:970-340-8151">970.340.8151</a>
              </li>
            </ul>
            <div className="flex items-center justify-start mt-4">
              <a
                href="https://www.facebook.com/Way-of-Compassion-Bike-Project-306763116012587/"
                className="hover:text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.0714 0C16.6071 0 17.0625 0.1875 17.4375 0.5625C17.8125 0.9375 18 1.39286 18 1.92857V16.0714C18 16.6071 17.8125 17.0625 17.4375 17.4375C17.0625 17.8125 16.6071 18 16.0714 18H10.567V11.8929H12.8973L13.3393 9H10.567V7.11161C10.567 6.09375 11.1027 5.58482 12.1741 5.58482H13.4196V3.13393C12.6696 3 11.933 2.93304 11.2098 2.93304C10.433 2.93304 9.76339 3.08036 9.20089 3.375C8.66518 3.66964 8.23661 4.11161 7.91518 4.70089C7.59375 5.29018 7.43304 5.98661 7.43304 6.79018V9H4.90179V11.8929H7.43304V18H1.92857C1.39286 18 0.9375 17.8125 0.5625 17.4375C0.1875 17.0625 0 16.6071 0 16.0714V1.92857C0 1.39286 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.39286 0 1.92857 0H16.0714Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/watch?v=REDyP1w7IVo&t=8s"
                className="hover:text-red-500"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6 ml-4"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.51339 6.83036L11.3304 9L7.51339 11.1696V6.83036ZM18 1.92857V16.0714C18 16.6071 17.8125 17.0625 17.4375 17.4375C17.0625 17.8125 16.6071 18 16.0714 18H1.92857C1.39286 18 0.9375 17.8125 0.5625 17.4375C0.1875 17.0625 0 16.6071 0 16.0714V1.92857C0 1.39286 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.39286 0 1.92857 0H16.0714C16.6071 0 17.0625 0.1875 17.4375 0.5625C17.8125 0.9375 18 1.39286 18 1.92857ZM16.3125 9C16.3125 7.41964 16.2054 6.24107 15.9911 5.46429C15.8304 4.76786 15.4018 4.33929 14.7054 4.17857C14.3839 4.07143 13.7411 3.99107 12.7768 3.9375C11.8393 3.88393 10.9688 3.85714 10.1652 3.85714H9C5.94643 3.85714 4.04464 3.96429 3.29464 4.17857C2.59821 4.33929 2.16964 4.76786 2.00893 5.46429C1.90179 5.8125 1.82143 6.28125 1.76786 6.87054C1.71429 7.45982 1.6875 7.96875 1.6875 8.39732V9C1.6875 10.6071 1.79464 11.7857 2.00893 12.5357C2.16964 13.2321 2.59821 13.6607 3.29464 13.8214C3.61607 13.9286 4.24554 14.0089 5.18304 14.0625C6.14732 14.1161 7.03125 14.1429 7.83482 14.1429H9C12.0536 14.1429 13.9554 14.0357 14.7054 13.8214C15.4018 13.6339 15.8304 13.2054 15.9911 12.5357C16.0982 12.2143 16.1786 11.7589 16.2321 11.1696C16.2857 10.5804 16.3125 10.0714 16.3125 9.64286V9Z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <a href="./contact">
                <span className="inline-flex shadow-sm">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border-2 border-gray-100 hover:border-white font-bold leading-5 font-medium hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 md:mb-12"
                  >
                    Contact Us
                  </button>
                </span>
              </a>
            </div>
          </div>
          <div className="mt-8 w-full sm:col-span-1">
            <h4 className="flex flex-grow-0 text-gray-100 leading-5 font-semibold tracking-wider">
              Hours
            </h4>
            <ul className="font-thin tracking-wider">
              <li className="mt-2">Sun. 11-5pm</li>
              <li className="mt-2">Mon. 2-6pm</li>
              <li className="mt-2">Wed. 2-5pm</li>
              <li className="mt-2">Thurs. 1-7pm</li>
            </ul>
          </div>
          <div className="mt-8 h-64 w-full sm:col-span-2">
            <div>
              <div className="flex items-center">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2 0H1.8C0.81 0 0.00899999 0.817788 0.00899999 1.81731L0 12.7212C0 13.7207 0.81 14.5385 1.8 14.5385H16.2C17.19 14.5385 18 13.7207 18 12.7212V1.81731C18 0.817788 17.19 0 16.2 0ZM16.2 3.63462L9 8.17788L1.8 3.63462V1.81731L9 6.36058L16.2 1.81731V3.63462Z"
                    fill="white"
                  />
                </svg>
                <label
                  htmlFor="email"
                  className="block pl-2 font-bold leading-5 text-gray-100"
                >
                  Sign-Up for Updates!
                </label>
              </div>
              <div className="mt-2 flex max-w-l z-10">
                <div className="relative flex-grow focus-within:z-10">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" />
                  <input
                    id="email"
                    className="text-black form-input block w-full rounded-none pl-4 h-11 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    placeholder="Your Email Address"
                  />
                </div>
                <button
                  type="button"
                  className="relative inline-flex items-center"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H45V45H0V0Z" fill="#25A2AA" />
                    <path
                      d="M22.4767 15L30.0001 22.5L22.4767 30"
                      fill="#25A2AA"
                    />
                    <path
                      d="M22.4767 15L30.0001 22.5L22.4767 30"
                      stroke="white"
                      strokeWidth="3"
                      strokeMiterLimit="10"
                    />
                    <path
                      d="M15 22.499H30"
                      stroke="white"
                      strokeWidth="3"
                      strokeMiterLimit="10"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-12 text-sm sm:flex sm:items-center">
                <img
                  src={wocLogo}
                  alt="Logo for the Way of Compassion Foundation"
                />
                <div className="font-thin leading-snug mt-4 sm:ml-4 text-gray-100 text-sm tracking-wider">
                  The WOC Bike Project is part of the Way of Compassion
                  Foundation.
                  <br /> &copy; {new Date().getFullYear()} Way of Compassion
                  Foundation
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
