import { ReactElement } from "react";

export interface ModalStateProps {
  content?: ReactElement;
  title?: string;
  actions?: [{
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  }]
}
 
export interface AppContextProps {
  modal?: ModalStateProps | undefined;
  openModal?: (modalData: ModalStateProps) => void;
  closeModal?: () => void;
}
 