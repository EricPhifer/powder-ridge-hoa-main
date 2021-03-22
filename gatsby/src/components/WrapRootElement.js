import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import withData from '../utils/withData';

export function WrapRootElement({ children, apollo }) {
  const [query, setQuery] = useState('😀');
  return (
    <ApolloProvider client={apollo} value={[query, setQuery]}>
      {children}
    </ApolloProvider>
  );
}

export default withData(WrapRootElement);
