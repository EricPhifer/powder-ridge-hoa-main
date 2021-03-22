import { useQuery } from '@apollo/client';
import { Link, Head, graphql, useStaticQuery } from 'gatsby';
import PaginationStyles from '../styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../../config';

export default function Pagination({ page }) {
  const { allData } = useStaticQuery(graphql`
    query {
      allData: allSiteBuildMetadata {
        totalCount
      }
    }
  `);
  const { error, loading, data } = useQuery(allData);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data.allSiteBuildMetadata;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
