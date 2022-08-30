import { useContext, useState } from "react";

import { ModalBody } from "..";
import AppContext from "../../../state/context";
import { SignUpFormField } from "../../../types/context";
import {
  getValidationErrors,
  validationSpecs,
  validEmail,
} from "../../../utils/validate";
import Bullet from "../../elements/bullets";
import { EmailInput, PasswordInput } from "../../form/inputs";

interface SignUpFormError {
  email?: string;
  password?: string;
  passwordConfirm?: string;
}
interface SignUpFormProps {
  error?: SignUpFormError | undefined;
  data?: SignUpFormField;
  validationErrors?: ValidationErrorsProps[];
  update?: (e: React.FormEvent<HTMLInputElement>) => void;
}
interface ValidationErrorsProps {
  label: string;
  id: number;
}

function SignUpForm({
  error,
  data,
  validationErrors,
  update,
}: SignUpFormProps) {
  const { email, password, passwordConfirm } = data ?? {};
  return (
    <div className="flex p-2">
      <form className="hidden- py-4">
        <EmailInput
          {...{
            label: "Your Email",
            name: "email",
            value: email,
            update,
            error,
          }}
        />
        <PasswordInput
          {...{
            label: "Your Password",
            name: "password",
            value: password,
            update,
            error,
          }}
        />
        <PasswordInput
          {...{
            label: "Confirm Your Password",
            name: "passwordConfirm",
            value: passwordConfirm,
            update,
            error,
          }}
        />
        <div className="w-96"></div>
      </form>
      <div className="p-4">
        <h4 className="font-bold">Password validation</h4>
        <ul className="">
          {validationSpecs().map(({ label, id }) => {
            const passed =
              !!validationErrors &&
              validationErrors?.filter((v) => v.id === id).length === 0;
            return (
              <li key={id} className="flex my-2">
                <Bullet active={passed} />
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function SignUp() {
  const { closeModal } = useContext(AppContext);
  const [error, setError] = useState<SignUpFormError>();
  const [validationErrors, setValidationErrors] =
    useState<ValidationErrorsProps[]>();
  const [
    data = {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    setData,
  ] = useState<SignUpFormField>();

  function handleClick() {
    const error: SignUpFormError = {
      email: "",
      password: "",
      passwordConfirm: "",
    };
    const { email, password, passwordConfirm } = data;

    // validate
    if (!validEmail(email)) {
      error.email = "Please enter a valid email.";
    }

    const passwordErrors = getValidationErrors(password, passwordConfirm);

    if (
      passwordErrors.length > 1 ||
      (passwordErrors.length === 1 && passwordErrors[0].id !== 5)
    ) {
      error.password = "Please enter a valid password.";
    }

    if (password !== passwordConfirm) {
      error.passwordConfirm = "Password confirm does not match.";
    }

    setValidationErrors(passwordErrors);

    if (Object.values(error).some((val) => !!val)) {
      setError(error);
      return;
    }

    // performSignUp({ email, password }, closeModal);
  }

  function updateFormData(e: React.FormEvent<HTMLInputElement>) {
    const { name = "", value = "" } = e.target as HTMLInputElement;
    if (value) {
      setData({
        ...data,
        [name]: value,
      });
      setError((prevError) => {
        return {
          ...prevError,
          [name]: "",
        };
      });
    }
  }

  return (
    <ModalBody
      {...{
        title: "Create your account",
        content: (
          <SignUpForm
            {...{ error, data, validationErrors, update: updateFormData }}
          />
        ),
        closeModal,
        actions: [
          {
            label: "Create account",
            onClick: handleClick,
          },
        ],
      }}
    />
  );
}

export default SignUp;
