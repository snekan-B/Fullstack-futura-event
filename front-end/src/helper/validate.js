import { toast } from "react-hot-toast";

export async function resgistervalidate(values) {
  const errors = {};
  passwordverify(errors, values);
  emailverify(errors, values);

  return errors;
}
function emailverify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("email required!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Invalid email !");
  }

  return error;
}

function passwordverify(error = {}, values) {
  const special = /[$&+,:;=?@#|'<>.-^*()%!]/;
  if (!values.password) {
    error.password = toast.error("password Required!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password");
  } else if (values.password.length < 4) {
    error.password = toast.error("password  must be more than 4 characters!");
  } else if (!special.test(values.password)) {
    error.password = toast.error("password must have any special character !");
  }
  return error;
}
