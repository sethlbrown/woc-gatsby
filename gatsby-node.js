// Helpful resources:
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
// https://css-tricks.com/how-to-make-taxonomy-pages-with-gatsby-and-sanity-io/
// https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const PageTemplate = path.resolve(`src/pages/templates/Page.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query getPages {
        pages: allSanityPost {
          nodes {
            id
            slug {
              current
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.pages.nodes.forEach((node) => {
      const { id, slug = {} } = node;

      if (!slug) return;

      const slugCurrent = `${slug.current}`;

      createPage({
        // Path for this page — required
        path: slugCurrent,
        component: PageTemplate,
        context: { id },
      });
    });
  });
};
