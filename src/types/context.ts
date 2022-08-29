
export interface ModalStateProps {
  component?: any;
  size?: string;
}
 
export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  openModal?: (component: ModalStateProps) => void;
  closeModal?: () => void;
}
 