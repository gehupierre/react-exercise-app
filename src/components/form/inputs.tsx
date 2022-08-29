import { FormEvent } from "react";

interface TextInputProps {
  name: string;
  type?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: any;
  update?: (e: FormEvent<HTMLInputElement>) => void;
}

export function TextInput({
  name,
  type,
  value,
  label,
  placeholder,
  update,
  error,
}: TextInputProps) {
  return (
    <label className="block mb-4" aria-labelledby="email-label">
      <span id="email-label" className="hidden">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder || label}
        value={value}
        onInput={update}
        className={`${
          error && error[name] ? "error" : ""
        } form-input w-full p-3 mt-1 rounded-md`}
      />

      <p
        className={`mt-2 ${
          error && error[name] ? "" : "hidden"
        } text-red-600 text-sm`}
      >
        {(error && error[name]) ?? ""}
      </p>
    </label>
  );
}

export function EmailInput({
  name,
  value,
  label,
  placeholder,
  update,
  error,
}: TextInputProps) {
  return (
    <TextInput
      {...{
        type: "email",
        name,
        value,
        label,
        placeholder,
        update,
        error,
      }}
    />
  );
}

export function PasswordInput({
  name,
  value,
  label,
  placeholder,
  update,
  error,
}: TextInputProps) {
  return (
    <TextInput
      {...{
        type: "password",
        name,
        value,
        label,
        placeholder,
        update,
        error,
      }}
    />
  );
}
