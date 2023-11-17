import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { AccountProfileDetails } from 'src/sections/account/account-profile-details';
import QrCodeGenerator from 'src/components/QrCodeGenerator';
const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
       Asset Management
      </title>
    </Head>
    <QrCodeGenerator/>
   {/* <AccountProfileDetails/> */}
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
