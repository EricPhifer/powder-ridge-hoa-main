import React from 'react';
import Layout from './src/components/Layout';

/* eslint-disable */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}> {element}</Layout>;
}

export function wrapRootElement({ element }) { return <WrapRootElement>{element}</WrapRootElement> }
