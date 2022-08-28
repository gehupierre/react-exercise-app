import { Component } from "react";
import { ModalBody } from "..";

interface SignInProps {
  closeModal: () => void;
}

class SignIn extends Component<SignInProps> {
  constructor(props: any) {
    super(props);
    console.log("SignIn", { props, instSignIn: this });
  }
  state = {
    email: "",
    password: "",
    errors: null,
  };
  handleClick() {
    const { closeModal = () => {} } = this.props;

    console.log("Click", { note: "From Signin" });

    // Do something with Sign in data
    closeModal();
  }
  render() {
    const { closeModal = () => {} } = this.props;
    const content = <div>Sign In Form</div>;
    const title = "Sign In";

    return (
      <ModalBody
        {...{
          title,
          content,
          closeModal,
          actions: [
            {
              label: title,
              onClick: ({ target }) => {
                console.log("SignIn", { instSignIn: this });
                this.handleClick();
              },
            },
          ],
        }}
      />
    );
  }
}

export default SignIn;
