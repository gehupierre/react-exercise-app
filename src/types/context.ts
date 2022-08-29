
export interface ModalStateProps {
  component?: any;
  size?: string;
}
 
export interface SignInSendProps {
  email: string;
  password: string;
}

export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  openModal: (component: ModalStateProps) => void;
  closeModal: () => void;
  performSignIn: (signInCreds: SignInSendProps, callback: () => void) => void;
}
