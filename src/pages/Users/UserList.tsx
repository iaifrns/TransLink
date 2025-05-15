import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import UserTable from '../../components/Tables/UserTable';
import DefaultLayout from '../../layout/DefaultLayout';

const UserList = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="User List" />
      <UserTable />
    </DefaultLayout>
  );
};

export default UserList;
