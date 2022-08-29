
export interface ModalStateProps {
  component?: any;
  size?: string;
}
 
export interface SignInFormField {
  email: string;
  password: string;
}

export interface SignUpFormField {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignInSendProps extends SignInFormField {}

export interface UserProps extends SignInFormField {
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
  isLoggedIn: () => boolean;
}
