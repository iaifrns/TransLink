import { Icon } from '@iconify/react';
import { UserStatus } from '../../enum/UserStatus';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';
import { User } from '../../types/user';

const productData: User[] = [
  {
    image: ProductOne,
    name: 'Nsini Franc',
    email: 'nsinifranc@gmail.com',
    position: UserStatus.SUPADMIN,
    username: 'francns'
  },
  {
    image: ProductTwo,
    name: 'Kevin kenfack',
    email: 'kevin@kenfack.com',
    position: UserStatus.COMPTABLE,
    username: "kevinKenf"
  },
  {
    image: ProductThree,
    name: 'John vipcall',
    email: 'johnvip@pulse.com',
    username: 'johnvip',
    position: UserStatus.ADMIN
  },
  {
    image: ProductFour,
    name: 'Baltaza pulse',
    email: 'baltaza@vipcall.com',
    username: 'balto',
    position: UserStatus.ADMIN
  },
];

const UserTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Users
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Full Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Username</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product.image} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.email}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-graydark  p-1 bg-gray rounded-sm font-semibold">
              {product.username}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.position}
            </p>
          </div>
          <div className="col-span-1 flex items-center gap-4">
            <Icon
              icon="fluent:delete-16-regular"
              width="24"
              height="24"
              className="text-red-500 cursor-pointer"
            />
            <Icon
              icon="lucide:edit"
              width="24"
              height="24"
              className="text-primary cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
