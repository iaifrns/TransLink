import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import useFetchRoles from '../../hooks/useFetchRoles';
import Loader from '../enterprises/components/Loader';
import EmptyArrayDisplay from '../../components/EmptyArrayDisplay';
import useFilterArray from '../../hooks/useFilterArray';

const RoleManagementPage = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState<Role[]>([]);

  useFetchRoles(setIsLoading, setRoles);

  const filterArray = useFilterArray(roles, searchText, 'position');

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Roles" />
      <div className="rounded-sm border p-4 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex w-full justify-end items-center">
          <div className="flex gap-2 items-center border border-stone-400 rounded-md p-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-[350px] p-3 focus:outline-none dark:bg-black"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <>
              {searchText.length > 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  onClick={() => setSearchText('')}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                  />
                </svg>
              )}
            </>
          </div>
          {/*  <button
            className="flex px-6 py-2 bg-primary rounded-md gap-2 items-center"
            onClick={() => {
              console.log('clicked');
            }}
          >
            <p className="font-semibold text-white text-lg">New</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h7m7 0h-7m0 0V5m0 7v7"
                color="white"
              />
            </svg>
          </button> */}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {isLoading ? (
            <div className="w-full flex justify-center">
              <Loader />
            </div>
          ) : (
            <>
              {filterArray.length > 0 ? (
                <>
                  {filterArray.map((role, ind) => (
                    <div
                      key={ind + role.id}
                      className="border px-4 py-2 text-lg rounded-md"
                    >
                      {role.position}
                    </div>
                  ))}
                </>
              ) : (
                <EmptyArrayDisplay />
              )}
            </>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RoleManagementPage;
