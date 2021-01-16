import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

export const SignUp = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = props;
    const { password, email, confirmPassword, displayName } = userCredentials;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ password, email, displayName });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          onChange={handleChange}
          label="Display Name"
          value={userCredentials.displayName}
          required
        />
        <FormInput
          type="text"
          name="email"
          onChange={handleChange}
          label="Email"
          value={userCredentials.email}
          required
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChange}
          label="Password"
          value={userCredentials.password}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          label="Confirm Password"
          value={userCredentials.confirmPassword}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
