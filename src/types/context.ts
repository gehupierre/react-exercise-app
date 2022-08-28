
export interface ModalStateProps {
  component?: any;
}
 
export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  openModal?: (component: ModalStateProps) => void;
  closeModal?: () => void;
}
 