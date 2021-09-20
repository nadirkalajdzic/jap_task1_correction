import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../services/authService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@material-ui/core";
import AuthCustomButton from "../AuthCustomButton/AuthCustomButton";
import links from "../../links/links";

import "../GeneralStyles/AuthStyles.css";

function RegisterPageForm() {
  const history = useHistory();

  const register = (values) => {
    if (values.password !== values.passwordRepeat)
      toast.error("Passwords must match");

    registerUser(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    )
      .then(() => {
        history.push("/");
        toast.success("Registered in successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    passwordRepeat: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: register,
  });

  return (
    <div className="auth-page-form">
      <form onSubmit={formik.handleSubmit} className="form-auth">
        <div>
          <Input
            fullWidth
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            type="text"
          />
          {formik.errors.firstName}
        </div>
        <div>
          <Input
            fullWidth
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            type="text"
          />
          {formik.errors.lastName}
        </div>
        <div>
          <Input
            fullWidth
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
          />
          {formik.errors.email}
        </div>
        <div>
          <Input
            fullWidth
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.errors.password}
        </div>
        <div>
          <Input
            fullWidth
            id="passwordRepeat"
            name="passwordRepeat"
            placeholder="Password repeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.errors.passwordRepeat}
        </div>
        <AuthCustomButton
          link={links.login.url}
          classNameAuth="auth-page-button"
          type="submit"
          disabled={
            formik.errors.firstName ||
            formik.errors.lastName ||
            formik.errors.email ||
            formik.errors.password ||
            formik.values.password !== formik.values.passwordRepeat
          }
          label="REGISTER"
        />
      </form>
    </div>
  );
}

export default RegisterPageForm;
