import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../helpingFunctions";
import { loginUser } from "../../services/authService";
import { Form } from "antd";
import "../GeneralStyles/AuthStyles.css";
import { toast } from "react-toastify";
import CustomInput from "../CustomInput/CustomInput";
import AuthCustomButton from "../AuthCustomButton/AuthCustomButton";

function LoginPageForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  const isNotEmpty = (val) => val !== "";

  useEffect(() => {
    validateEmail(email) && isNotEmpty(password)
      ? setDisabled(false)
      : setDisabled(true);
  }, [email, password]);

  const login = () => {
    setDisabled(true);
    loginUser(email, password)
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
    setDisabled(false);
  };

  return (
    <div className="auth-page-form">
      <Form>
        <Form.Item name="email">
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
        <Form.Item name="password">
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
          <AuthCustomButton disabled={disabled} onClick={login} label="LOGIN" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPageForm;
