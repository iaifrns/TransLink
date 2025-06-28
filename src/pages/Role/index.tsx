import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const RoleManagementPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Roles" />
      <div>Role management page</div>
    </DefaultLayout>
  );
};

export default RoleManagementPage;
