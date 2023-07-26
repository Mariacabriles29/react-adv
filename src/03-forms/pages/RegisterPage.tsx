import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
import { FormEvent } from "react";

export const RegisterPage = () => {
  const { formData, onChange, name, email, password1, password2 } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder=" Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
