/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import PortableText from '@sanity/block-content-to-react';

// @to-do Need to use global environmental variables here
const sanityConfig = { dataset: 'production', projectId: '01gkrqr1' };

const serializer = {
  types: {
    image: function outputImage({ node }) {
      return (
        <GatsbyImage
          image={getGatsbyImageData(
            node,
            { width: 350, placeholder: 'blurred', fit: 'fill' },
            sanityConfig
          )}
          className="sm:float-right sm:mx-3 sm:my-2"
        />
      );
    },
  },
};

const AboutPage = ({ data }) => (
  // React Fragment notation
  <>
    <div className="relative">
      <div className="max-w-7xl mx-auto absolute inset-0">
        <GatsbyImage
          image={data.page.mainImage.asset.gatsbyImageData}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-100 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-7xl mx-auto relative px-4 pt-24 pb-8 sm:px-6 lg:h-64 lg:px-8">
        <h1
          className="
            bg-red-600
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
          {data.page.title}
        </h1>
        <div className="w-1/2 pb-4 border-t-2 border-white" />
      </div>
    </div>
    <article className="bg-yellow-200 prose sm:ml-2 lg:ml-4 lg:prose-xl max-w-7xl">
      <PortableText blocks={data.page._rawBody} serializers={serializer} />
    </article>
  </>
);

// data.propTypes = {
//   page.title: PropTypes.string.isRequired
// };

export const query = graphql`
  query AboutPage {
    page: sanityPost(slug: { current: { eq: "about-us" } }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
      mainImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default AboutPage;
