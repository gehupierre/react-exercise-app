import { ReactElement, useContext } from "react";
import AppContext from "../../state/context";
import { ModalStateProps } from "../../types/context";

interface ModalBodyProps extends ModalStateProps {
  content?: ReactElement;
  title?: string;
  actions?: [
    {
      label: string;
      onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    }
  ];
  closeModal: () => void;
}

export function ModalBody({
  title,
  content,
  actions,
  closeModal,
}: ModalBodyProps) {
  return (
    <>
      <div className="bg-white px-4 pt-5 pb-1 sm:px-6 sm:pb-1">
        <div className="">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              {title}
            </h3>
            <div className="mt-2">{content}</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        {actions &&
          actions.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {label}
            </button>
          ))}
        <button
          type="button"
          onClick={closeModal}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default function Modal() {
  const { modal } = useContext(AppContext);
  const { component, size = "full" } = modal ?? {};
  const ModalComponent = component;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${
          component ? "" : "hidden"
        } fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
      ></div>

      <div
        className={`${
          component ? "h-100 " : "h-0"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div
            className={`${
              component ? "opacity-100 " : "opacity-0"
            } relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-opacity ease-in-out duration-700 delay-100 sm:my-8 ${size}`}
          >
            {component ? <ModalComponent /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
