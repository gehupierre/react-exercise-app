import { useContext, useState } from "react";

import { ModalBody } from "..";
import AppContext from "../../../state/context";
import { SignInSendProps } from "../../../types/context";
import { validEmail } from "../../../utils/validate";
import { EmailInput, PasswordInput } from "../../form/inputs";

interface SignInFormError extends SignInSendProps {}

interface SignInFormProps {
  error?: SignInFormError | undefined;
  data?: any;
  update?: (e: React.FormEvent<HTMLInputElement>) => void;
}

function SignInForm({ error, data, update }: SignInFormProps) {
  const { email, password } = data;
  return (
    <form className=" py-4">
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
      <div className="w-96"></div>
    </form>
  );
}

function SignIn() {
  const { closeModal, performSignIn } = useContext(AppContext);
  const [error, setError] = useState<SignInFormError>();
  const [data = { email: "", password: "" }, setData] =
    useState<SignInSendProps>();
  function handleClick() {
    const error: SignInFormError = {
      email: "",
      password: "",
    };
    const { email, password } = data;
    // validate
    if (!validEmail(email)) {
      error.email = "Please enter a valid email.";
    }

    if (password === "") {
      error.password = "Please enter a valid password.";
    }

    if (Object.values(error).some((val) => !!val)) {
      setError(error);
      return;
    }

    performSignIn({ email, password }, closeModal);
  }
  function updateFormData(e: React.FormEvent<HTMLInputElement>) {
    const { name = "", value = "" } = e.target as HTMLInputElement;
    if (value) {
      setData({
        ...data,
        [name]: value,
      });
    }
  }
  const title = "Please sign in";
  const content = <SignInForm {...{ error, data, update: updateFormData }} />;

  return (
    <ModalBody
      {...{
        title,
        content,
        closeModal,
        actions: [
          {
            label: title,
            onClick: handleClick,
          },
        ],
      }}
    />
  );
}

export default SignIn;
