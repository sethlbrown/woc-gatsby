import React from 'react';
import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import { StaticImage } from 'gatsby-plugin-image';

export default function Tout() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto absolute inset-0">
        <StaticImage
          className="w-full h-full object-cover"
          src="../images/young_person_bike_project.jpeg"
          alt="Bike Project Young Person"
          placeholder="blurred"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-100 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-7xl mx-auto relative py-12 px-4 sm:py-32 sm:px-6 lg:px-16">
        <h1
          className="
          w-11/12 
          text-2xl 
          font-semibold 
          text-white 
          sm:text-5xl 
          sm:w-3/4 
          lg:w-7/12
          lg:leading-normal
          "
        >
          A bicycle shop where members can grow and learn.
        </h1>
        <p className="mt-6 font-semibold text-base sm:text-2xl text-teal-500 max-w-3xl">
          <div className="w-1/2 pb-4 border-t-2 border-white" />
          Read Our Story{' '}
          <BsArrowRight className="inline text-2xl sm:text-4xl font-black" />
        </p>
      </div>
    </div>
  );
}
