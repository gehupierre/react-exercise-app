import { createContext } from "react";

import { AppContextProps } from "../types/context";

const initState: AppContextProps = {
  modal: undefined,
  user: undefined,
  openModal: () => {},
  closeModal: () => {},
  performSignIn: () => {},
  isLoggedIn: () => false,
};

const AppContext = createContext<AppContextProps>(initState);

export default AppContext;