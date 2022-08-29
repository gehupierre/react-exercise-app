import { ReactNode, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  User as FirebaseUser,
} from "firebase/auth";

import { ModalStateProps, SignInSendProps, UserProps } from "../types/context";
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
  const [appUser, setAppUser] = useState<UserProps>();

  useEffect(() => {
    if (appUser) {
      localStorage.setItem("app-user", JSON.stringify(appUser));
    } else {
      const savedUserStr = localStorage.getItem("app-user") || "";
      const savedUser = savedUserStr && JSON.parse(savedUserStr);
      if (savedUser) {
        setAppUser(savedUser);
      }
    }
  }, [appUser]);

  return (
    <AppContext.Provider
      value={{
        modal: appModal,
        user: appUser,
        openModal: (modalData: ModalStateProps) => setAppModal(modalData),
        closeModal: () => setAppModal(undefined),
        performSignIn: ({ email, password }: SignInSendProps, callback) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
              console.log({ user });
              const { email, uid, displayName } = user as FirebaseUser;
              const token = await user.getIdToken();

              setAppUser({
                uid,
                token,
                password: "",
                email: email ?? "",
                displayName: displayName ?? "",
              });
              callback();
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
