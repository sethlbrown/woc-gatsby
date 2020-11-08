/* eslint-disable react/jsx-props-no-spreading */
import './src/css/style.css';
import React from 'react';
import Layout from './src/components/layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
