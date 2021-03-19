import React from 'react';
import Layout from './src/components/Layout';
import { WrapRootElement } from './src/components/WrapRootElement';

/* eslint-disable */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}> {element}</Layout>;
}

export function wrapRootElement({ element }) { return <WrapRootElement>{element}</WrapRootElement> } 
