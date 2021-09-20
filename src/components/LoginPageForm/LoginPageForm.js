import React from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";
import AuthCustomButton from "../AuthCustomButton/AuthCustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@material-ui/core";
import links from "../../links/links";

function LoginPageForm() {
  const history = useHistory();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const login = (values) => {
    if (values.email === undefined || values.password === undefined) return;

    loginUser(values.email, values.password)
      .then((res) => {
        const obj = {
          token: res.data.data.token,
          name: `${res.data.data.firstName} ${res.data.data.lastName}`,
        };
        localStorage.setItem("session", JSON.stringify(obj));
        history.push("/");
        toast.success("Logged in successfully");
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: login,
  });

  return (
    <div className="auth-page-form">
      <form onSubmit={formik.handleSubmit} className="form-auth">
        <Input
          fullWidth
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="text"
        />
        <Input
          fullWidth
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
        />
        <AuthCustomButton
          classNameAuth="auth-page-button"
          type="submit"
          link={links.register.url}
          disabled={formik.errors.email || formik.errors.password}
          label="LOGIN"
        />
      </form>
    </div>
  );
}

export default LoginPageForm;
