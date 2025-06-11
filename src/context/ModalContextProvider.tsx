import { createContext, ReactNode, useState } from 'react';
import { EnterpirseType } from '../types/enterprise';

interface ModalType {
  openCreateEnterpriseModal: boolean;
  setOpenCreateEnterpriseModal: (v: boolean) => void;
  openEnterpriseDetailModal: boolean;
  setOpenEnterpriseDetailModal: (v: boolean) => void;
  enterprises: EnterpirseType[] | null;
  setEnterprises: (v: EnterpirseType[]) => void;
  enterprise: EnterpirseType | null;
  setEnterprise: (v: EnterpirseType | null) => void;
}

const initial: ModalType = {
  openCreateEnterpriseModal: false,
  setOpenCreateEnterpriseModal: (v) => v,
  openEnterpriseDetailModal: false,
  setOpenEnterpriseDetailModal: (v) => v,
  enterprises: null,
  setEnterprises: (v) => v,
  enterprise: null,
  setEnterprise: (v) => v,
};

export const ModalContext = createContext(initial);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openCreateEnterpriseModal, setOpenCreateEnterpriseModal] =
    useState(false);
  const [openEnterpriseDetailModal, setOpenEnterpriseDetailModal] =
    useState(false);
  const [enterprises, setEnterprises] = useState<EnterpirseType[] | null>(null);
  const [enterprise, setEnterprise] = useState<EnterpirseType | null>(null);

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
        setEnterprises,
        openEnterpriseDetailModal,
        setOpenEnterpriseDetailModal,
        enterprise,
        setEnterprise,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
