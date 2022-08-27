import { createContext } from "react";

import { AppContextProps } from "../types/context";

const initState: AppContextProps = {
  modal: undefined,
  openModal: () => {},
};

const AppContext = createContext<AppContextProps>(initState);

export default AppContext;