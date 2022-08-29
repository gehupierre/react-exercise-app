
export interface ModalStateProps {
  component?: any;
  size?: string;
}
 
export interface SignInSendProps {
  email: string;
  password: string;
}

export interface UserProps extends SignInSendProps {
  uid: string;
  token: string;
  displayName: string;
}

export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  user?: UserProps | undefined;
  openModal: (component: ModalStateProps) => void;
  closeModal: () => void;
  performSignIn: (signInCreds: SignInSendProps, callback: () => void) => void;
}
