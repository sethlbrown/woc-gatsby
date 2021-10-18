import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Testimonials() {
  const data = useStaticQuery(graphql`
    query Testimonial {
      allSanityTestimonial {
        nodes {
          body {
            children {
              text
            }
          }
          title
        }
        totalCount
      }
    }
  `);

  const randTest = Math.floor(
    Math.random() * data.allSanityTestimonial.totalCount
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="font-semibold md:font-bold text-lg md:text-2xl leading-9 md:leading-10 p-8 md:p-20">
        <svg
          className="h-16 md:h-20"
          viewBox="0 0 90 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 45.122C0 60.9756 10.1887 70 21.5903 70C32.0216 70 40.7547 61.2195 40.7547 50.7317C40.7547 40.2439 33.4771 33.1707 24.2588 33.1707C22.3181 33.1707 20.1348 33.4146 19.407 33.9024C21.5903 25.122 30.566 14.878 38.3288 10.7317L24.9865 0C9.94609 10.4878 0 26.8293 0 45.122ZM49.4879 45.122C49.4879 60.9756 59.434 70 70.8356 70C81.5094 70 90 61.2195 90 50.7317C90 40.2439 82.7224 33.1707 73.7466 33.1707C71.8059 33.1707 69.6226 33.4146 68.8949 33.9024C70.8356 25.122 80.0539 14.878 87.8167 10.7317L74.2318 0C59.1914 10.4878 49.4879 26.8293 49.4879 45.122Z"
            fill="#829260"
          />
        </svg>
        <p className="p-4 md:pt-4 md:px-12">
          {console.log(randTest)}
          {data.allSanityTestimonial.nodes[randTest].body[0].children[0].text}
          <span className="block text-sm md:text-base italic font-light flex md:justify-end">
            - {data.allSanityTestimonial.nodes[randTest].title}
          </span>
        </p>
      </div>
    </div>
  );
}
