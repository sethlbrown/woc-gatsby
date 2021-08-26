/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from '@sanity/block-content-to-react';
// import SEO from '../components/seo';

const AboutPage = ({ data }) => (
  <article className="prose lg:prose-xl">
    <h1>{data.page.title}</h1>
    <GatsbyImage image={data.page.mainImage.asset.gatsbyImageData} />
    <PortableText blocks={data.page._rawBody} />
    <pre>{JSON.stringify(data.page._rawBody, null, 4)}</pre>
  </article>
);
export const query = graphql`
  query AboutPage {
    page: sanityPost(slug: { current: { eq: "about-us" } }) {
      id
      title
      _rawBody
      mainImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default AboutPage;
