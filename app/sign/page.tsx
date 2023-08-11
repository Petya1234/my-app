// pages/index.tsx
import type { ReactElement } from 'react';
import Layout from './layout';

export default function Page() {
  return {
    // ...
  };
}

Page.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
);