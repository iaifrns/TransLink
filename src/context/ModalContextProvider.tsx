import { createContext, ReactNode, useState } from 'react';
import { EnterpirseType } from '../types/enterprise';

interface ModalType {
  openCreateEnterpriseModal: boolean;
  setOpenCreateEnterpriseModal: (v: boolean) => void;
  enterprises: EnterpirseType[] | null;
  setEnterprises: (v: EnterpirseType[]) => void;
}

const initial: ModalType = {
  openCreateEnterpriseModal: false,
  setOpenCreateEnterpriseModal: (v) => v,
  enterprises: null,
  setEnterprises: (v) => v,
};

export const ModalContext = createContext(initial);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openCreateEnterpriseModal, setOpenCreateEnterpriseModal] =
    useState(false);
const [enterprises, setEnterprises] = useState<EnterpirseType[]|null>(null)

  const handleCreateModal = (v: boolean) => {
    setOpenCreateEnterpriseModal(v);
    console.log(v);
  };

  return (
    <ModalContext.Provider
      value={{
        openCreateEnterpriseModal,
        setOpenCreateEnterpriseModal: handleCreateModal,
        enterprises,
        setEnterprises
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
