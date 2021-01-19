export const validateForm = (values) => {
  let errors = {};

  //   validate phone number
  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^[0]\d{10}$/.test(values.phone.trim())) {
    errors.phone = "Phone number is invalid";
  }
  //   validate phone number
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = "Email address is invalid";
  }

  //   address validation
  if (!values.address) {
    errors.address = "Address is required";
  }
  return errors;
};

export const validateSchInfo = (values) => {
  let errors = {};

  //   validate full name
  if (!values.fullname.trim()) {
    errors.fullname = "Full name is required";
  } else if (
    !/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/.test(values.fullname.trim())
  ) {
    errors.fullname = "Please enter a valid name";
  }
  //   validate shcool name
  if (!values.schoolname.trim()) {
    errors.schoolname = "School name is required";
  } else if (!/^[a-zA-Z0-9_ ]*$/.test(values.schoolname.trim())) {
    errors.schoolname = "Email address is invalid";
  }

  //   liscence validation
  if (!values.liscenced) {
    errors.liscenced = "Liscenced status is required";
  }
  return errors;
};

export const validateSignup = (values) => {
  let errors = {};

  //   username confirmation
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.trim().length < 4) {
    errors.username = "Enter a valid username";
  } else if (!/^[a-zA-Z0-9_]*$/.test(values.username)) {
    errors.username = "Password must not contain special characters";
  }

  // password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(values.password)) {
    errors.password =
      "Password must have at least 1 uppercase, 1 lowercase letter and 1 number";
  }

  //   confirm password validation
  if (!(values.confirmpassword === values.password)) {
    errors.confirmpassword = "Passwords don't match";
  }

  return errors;
};
