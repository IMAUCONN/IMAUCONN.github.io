import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';




function Hello() {
  return (
    <Layout title="Hello">
      <Link style={{marginRight:10}}
        className={clsx('button button--secondary button--lg',)}to={useBaseUrl('https://innovatelabs.uconn.edu/opim-innovate-2/vibe/')}>Vibe Tech Kits
      </Link>
      <Link style={{marginRight:10}}
        className={clsx('button button--secondary button--lg',)}to={useBaseUrl('https://opim.business.uconn.edu/')}>OPIM Department
      </Link>
      <Link style={{marginRight:10}}
        className={clsx('button button--secondary button--lg',)}to={useBaseUrl('https://undergrad.business.uconn.edu/academics/majors/mis/')}>MIS Major
      </Link>
    </Layout>
  );
}

export default Hello;