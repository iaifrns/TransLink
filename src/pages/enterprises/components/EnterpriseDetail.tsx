import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../../context/ModalContextProvider';
import { apiUrl } from '../../../constants/apiRoutes';
import { EnterpirseType } from '../../../types/enterprise';

const EnterpriseDetail = () => {
  const {
    openEnterpriseDetailModal,
    setOpenEnterpriseDetailModal,
    enterprise,
    enterprises,
    setEnterprises,
    setEnterprise
  } = useContext(ModalContext);
  const [active, setActive] = useState(enterprise?.active);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => console.log(enterprise), [active]);

  const handleUpdateEnterprise = async () => {
    setIsLoading(true);
    if (enterprise?.active != active && enterprise) {
      const response = await fetch(apiUrl.updateEnterprise, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: enterprise.id,
          enterpriseName: enterprise.enterpriseName,
          enterpriseCode: enterprise.enterpriseCode,
          active: active,
        }),
      });

      if (!response.ok) {
        alert('an error occured please try again');
        setIsLoading(false);
        return;
      }
      const result = await response.json();
      console.log("here")
      if (enterprises) {
        const newArr: EnterpirseType[] = [];
        enterprises.forEach((item) => {
          if (item.id == result.id) {
            newArr.push(result);
          } else {
            newArr.push(item);
          }
        });

        setEnterprises(newArr);
      }
      setOpenEnterpriseDetailModal(false);
    }
    setIsLoading(false);
  };

  return (
    <div
      className={` ${
        openEnterpriseDetailModal ? 'flex absolute' : 'hidden'
      } w-full h-screen justify-center`}
    >
      <div className="p-4 border border-stone-300 rounded-md w-[400px] bg-white shadow-3 dark:bg-black dark:border-stone-500 flex flex-col gap-3 h-fit mt-20 items-center">
        <div className="flex justify-end items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            onClick={() => {
                setEnterprise(null)
                setOpenEnterpriseDetailModal(false)}}
            className="cursor-pointer"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m8 8l4 4m0 0l4 4m-4-4l4-4m-4 4l-4 4"
            />
          </svg>
        </div>
        <div
          className="h-[120px] w-[120px] flex justify-center items-center rounded-full"
          style={{ backgroundColor: 'red' }}
        >
          <p className="font-bold text-[40px] text-white">
            {enterprise?.enterpriseName[0].toUpperCase()}
          </p>
        </div>
        <div className="w-[80%] flex flex-col gap-4">
          <div className="flex gap-4 items-center text-xl">
            <p>Name: </p>
            <p className="font-semibold">{enterprise?.enterpriseName}</p>
          </div>
          <div className="flex gap-4 items-center text-xl">
            <p>Code: </p>
            <p className="font-semibold">{enterprise?.enterpriseCode}</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <p
              className={`${
                active ? 'text-green-500' : 'text-red-500'
              } text-sm`}
            >
              {active ? 'Active' : 'Not Active'}
            </p>
          </div>
        </div>
        <button
          className="w-full p-3 bg-black rounded-md font-semibold text-white disabled:bg-slate-300 flex justify-center"
          disabled={enterprise == null ? true : enterprise?.active == active}
          onClick={() => {
            if (!isLoading) {
              handleUpdateEnterprise();
            }
          }}
        >
          {isLoading ? (
            <div className="h-[24px] w-[24px] animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
          ) : (
            <p className="text-center">Update</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default EnterpriseDetail;
