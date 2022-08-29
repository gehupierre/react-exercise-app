export function validEmail(email: string) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
export function validationSpecs() {
  return [
    { label: "8 or more characters", id: 1, validator: (password: string) => password.length >= 8 },
    {
      label: "At least 1 number",
      id: 2,
      validator: (password: string) => {
        const strArr = password.split("");
        const numberStrs = strArr.filter((char: string) => {
          return Number.isInteger(parseInt(char));
        });
  
        return numberStrs.length > 0;
      },
    },
    {
      label: "1 uppercase char",
      id: 3,
      validator: (password: string) =>
      password
      .replaceAll(/[^a-z]/gmi, "")
      .split("")
      .filter((char) => char.toUpperCase() === char).length > 0,
    },
    {
      label: "1 lowercase char",
      id: 4,
      validator: (password: string) =>
      password.split("").filter((char) => char.toLowerCase() === char).length > 0,
    },
    { label: "Password confirm", id: 5, validatorConfirm: (password: string, passwordConfirm: string) => !!password && password === passwordConfirm },
  ];
}
export function getValidationErrors(password: string, passwordConfirm: string) {
  return validationSpecs()
    .filter((v) => {
      if (typeof v.validatorConfirm === "function") {
        return v.validatorConfirm(password, passwordConfirm) === false;
      } else if (typeof v.validator === "function") {
        return v.validator(password) === false;
      }

      return false;
    })
    .map(({ id, label }) => ({
      id,
      label,
    }));
}