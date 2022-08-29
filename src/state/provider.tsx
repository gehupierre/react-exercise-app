import { ReactNode, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ModalStateProps, SignInSendProps } from "../types/context";
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
        performSignIn: ({ email, password }: SignInSendProps, callback) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
              console.log({ user });
              // user: {accessToken, email, displayName, emailVerified, phoneNumber, photoURL, providerData: [], providerId, uid}
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log({ errorMessage, errorCode, error });
            });
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
