import { Component } from "react";
import { ModalBody } from "..";
import { validEmail } from "../../../utils/validate";
import { EmailInput, PasswordInput } from "../../form/inputs";

interface SignInFormError {
  email: string;
  password: string;
  [key: string]: string;
}
interface SignInFormProps {
  error?: SignInFormError | undefined;
  data?: any;
  update?: (e: React.FormEvent<HTMLInputElement>) => void;
}
interface SignInProps {
  closeModal: () => void;
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

class SignIn extends Component<SignInProps> {
  state = {
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  };
  handleClick() {
    const { closeModal = () => {} } = this.props;
    const error: SignInFormError = {
      email: "",
      password: "",
    };
    const { email, password } = this.state;
    // validate
    if (!validEmail(email)) {
      error.email = "Please enter a valid email.";
    }

    if (password === "") {
      error.password = "Please enter a valid password.";
    }

    if (Object.values(error).some((val) => !!val)) {
      this.setState({ error });
      return;
    }

    // Do something with Sign in data
    closeModal();
  }
  updateFormData(e: React.FormEvent<HTMLInputElement>) {
    const { name = "", value = "" } = e.target as HTMLInputElement;
    if (value) {
      const { error } = this.state;
      this.setState({
        [name]: value,
        error: {
          ...error,
          [name]: "",
        },
      });
    }
  }
  render() {
    const { closeModal = () => {} } = this.props;
    const { error, ...data } = this.state;
    const title = "Please sign in";
    const content = (
      <SignInForm
        {...{ error, data, update: this.updateFormData.bind(this) }}
      />
    );

    return (
      <ModalBody
        {...{
          title,
          content,
          closeModal,
          actions: [
            {
              label: title,
              onClick: this.handleClick.bind(this),
            },
          ],
        }}
      />
    );
  }
}

export default SignIn;
