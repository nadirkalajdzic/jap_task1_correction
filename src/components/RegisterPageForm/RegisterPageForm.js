import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "antd";
import { registerUser } from "../../services/authService";
import { validateEmail } from "../../helpingFunctions";
import "../GeneralStyles/AuthStyles.css";
import CustomInput from "../CustomInput/CustomInput";
import AuthCustomButton from "../AuthCustomButton/AuthCustomButton";

function RegisterPageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    isNotEmpty(firstName) &&
    isNotEmpty(lastName) &&
    validateEmail(email) &&
    isNotEmpty(password) &&
    isNotEmpty(passwordRepeat) &&
    password === passwordRepeat
      ? setDisabled(false)
      : setDisabled(true);
  }, [firstName, lastName, email, password, passwordRepeat, disabled]);

  const isNotEmpty = (val) => val !== "";
  const isEqualToPasswordAndNotEmpty = (val) =>
    isNotEmpty(val) && val === password;

  const register = () => {
    registerUser(firstName, lastName, email, password)
      .then(() => {
        history.push("/");
        toast.success("Registered in successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="auth-page-form">
      <Form>
        <Form.Item>
          <CustomInput
            label="First Name"
            errorMessage="Cannot be empty"
            placeholder="First Name"
            type="text"
            value={firstName}
            setValue={setFirstName}
            validate={isNotEmpty}
          />
        </Form.Item>
        <Form.Item>
          <CustomInput
            label="Last Name"
            errorMessage="Cannot be empty"
            placeholder="Last Name"
            type="text"
            value={lastName}
            setValue={setLastName}
            validate={isNotEmpty}
          />
        </Form.Item>
        <Form.Item>
          <CustomInput
            label="Email"
            errorMessage="Enter a valid email"
            placeholder="e.g. johndoe@gmail.com"
            type="email"
            value={email}
            setValue={setEmail}
            validate={validateEmail}
          />
        </Form.Item>
        <Form.Item>
          <CustomInput
            label="Password"
            errorMessage="Password cannot be empty"
            placeholder="don't enter a simple password!"
            type="password"
            value={password}
            setValue={setPassword}
            validate={isNotEmpty}
          />
        </Form.Item>
        <Form.Item>
          <CustomInput
            label="Password repeat"
            errorMessage="Passwords must match"
            placeholder="repeat password from above"
            type="password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            validate={isEqualToPasswordAndNotEmpty}
          />
        </Form.Item>
        <Form.Item>
          <AuthCustomButton
            disabled={disabled}
            onClick={register}
            label="REGISTER"
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPageForm;
