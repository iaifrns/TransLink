import { EnterpirseType } from '../../../types/enterprise';

const EnterpriseItem = ({
  enterprise,
  color,
  onclick
}: {
  enterprise: EnterpirseType;
  color: string;
  onclick: () => void
}) => {
  return (
    <div
      className="rounded-md border p-3 border-stone-300 bg-stone-100 shadow-3 dark:border-stone-600 dark:bg-strokedark flex gap-4 items-center w-[320px] cursor-default"
      onClick={onclick}
    >
      <div
        className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <p className="text-2xl font-bold text-white">
          {enterprise.enterpriseName[0].toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{enterprise.enterpriseName}</p>
        <p className="text-sm">Code: {enterprise.enterpriseCode}</p>
        <p
          className={`${
            enterprise.active ? 'text-green-500' : 'text-red-500'
          } text-sm`}
        >
          {enterprise.active ? 'Active' : 'Not Active'}
        </p>
      </div>
    </div>
  );
};

export default EnterpriseItem;
