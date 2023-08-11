// pages/index.tsx
import type { ReactElement } from 'react'
import Layout from '@/app/sign/signLayout'


export default function Page() {
  return (
    <div><p>FDFSDFSDFSDFE</p></div>
  );
}

Page.getLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
)