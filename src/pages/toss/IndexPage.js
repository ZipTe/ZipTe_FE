import { Outlet } from 'react-router-dom';
import BasicLayout from '../../layouts/BasicLayout';

function IndexPage() {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
}

export default IndexPage;
