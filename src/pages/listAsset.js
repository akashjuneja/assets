import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => {
  return (
    <div>listAsset</div>
  )
}

Page.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );

  export default Page;
