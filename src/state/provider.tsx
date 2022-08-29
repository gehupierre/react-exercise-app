import { ReactNode, useState } from "react";
import { initializeApp } from "firebase/app";

import { ModalStateProps } from "../types/context";
import AppContext from "./context";

const {
  REACT_APP_API_KEY,
  REACT_APP_API_DOMAIN,
  REACT_APP_DB_URL,
  REACT_APP__PROJECT_ID,
  REACT_APP_BUCKET,
  REACT_APP_MESSAGE_SENDER_ID,
  REACT_APP_ID,
} = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_API_DOMAIN,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP__PROJECT_ID,
  storageBucket: REACT_APP_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
  appId: REACT_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);

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
