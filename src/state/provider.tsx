import { ReactNode, useState } from "react";

import { ModalStateProps } from "../types/context";
import AppContext from "./context";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  const [appModal, setAppModal] = useState<ModalStateProps>();

  return (
    <AppContext.Provider
      value={{
        modal: appModal,
        openModal: (modalData: ModalStateProps) => setAppModal(modalData),
        closeModal: () => setAppModal(undefined),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
