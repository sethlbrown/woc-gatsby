import PropTypes from 'prop-types';
import React from 'react';
import Banner from './banner';
import Header from './header';
import Footer from './footer';
import Donate from './donate';
import Testimonials from './testimonials';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Banner />
      <Header />

      <main>{children}</main>

      <Donate />
      <Testimonials />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
