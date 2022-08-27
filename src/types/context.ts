import { ReactElement } from "react";

export interface ModalStateProps {
  content?: ReactElement;
  title?: string;
}
 
export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  openModal?: (modalData: ModalStateProps) => void;
  closeModal?: () => void;
}
 