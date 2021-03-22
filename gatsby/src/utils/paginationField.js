import { graphql, useStaticQuery } from 'gatsby';

export default function paginationField() {
  const { allData } = useStaticQuery(graphql`
    query {
      allData: allSiteBuildMetadata {
        totalCount
      }
    }
  `);
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      // console.log({ existing, args, cache });
      const { skip, first } = args;
      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: allData });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false;
      }
      if (items.length) {
        return items;
      }
      return false; // fallback to network
    },
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    merge(existing, incoming, { args }) {
      const { skip } = args; // removed "first" from destructure
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
