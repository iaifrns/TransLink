import { useContext, useState } from 'react';
import { apiUrl } from '../../../constants/apiRoutes';
import { ModalContext } from '../../../context/ModalContextProvider';

const CreateEnterpriseModal = () => {
  const {
    openCreateEnterpriseModal,
    setOpenCreateEnterpriseModal,
    setEnterprises,
    enterprises,
  } = useContext(ModalContext);
  const [enterpriseName, setEnterpriseName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (enterpriseName.length > 0) {
      setErrorMessage('');
      setIsLoading(true);

      const response = await fetch(apiUrl.createEnterprise, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enterpriseName: enterpriseName }),
      });

      if (!response.ok) {
        setErrorMessage(
          'Check if the name you are using is not used and try again',
        );
        setIsLoading(false);
        console.log(response);
        return;
      }

      const result = await response.json();

      let newArr;
      if (enterprises) {
        newArr = enterprises;
        newArr.push(result);
      } else {
        newArr = [result];
      }
      setEnterprises(newArr);
      setIsLoading(false);
      setEnterpriseName('');
      setOpenCreateEnterpriseModal(false);
      setErrorMessage('');
    } else {
      setErrorMessage('please enter the informations');
    }
  };

  return (
    <div
      className={` ${
        openCreateEnterpriseModal ? 'flex absolute' : 'hidden'
      } w-full h-screen justify-center`}
    >
      <div className="p-4 border border-stone-300 rounded-md w-[400px] bg-white shadow-3 dark:bg-black dark:border-stone-500 flex flex-col gap-3 h-fit mt-20">
        <div className="flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            onClick={() => setOpenCreateEnterpriseModal(false)}
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
        <p className="text-center text-xl font-bold">New Enterprise</p>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Enterprise Name:</p>
          <input
            type="text"
            className="border rounded-md p-3"
            value={enterpriseName}
            onChange={(e) => setEnterpriseName(e.target.value)}
          />
          <p className="text-sm text-red-500">{errorMessage}</p>
        </div>
        <button
          className="bg-primary text-white font-semibold p-3 rounded-md flex justify-center"
          onClick={() => {
            if (!isLoading) {
              handleSubmit();
            }
          }}
        >
          {isLoading ? (
            <div className="h-[24px] w-[24px] animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
          ) : (
            <p>Submit</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateEnterpriseModal;
