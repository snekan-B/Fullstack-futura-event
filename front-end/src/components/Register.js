import React from "react";
import { Button, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resgistervalidate } from "../helper/validate.js";
import { register } from "../helper/helper.js";
import "bootstrap/dist/css/bootstrap.css";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: resgistervalidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerpromise = register(values);
      toast.promise(registerpromise, {
        loading: "creating...",
        success: <b>Registered successfully</b>,
        error: <b>Could not Register</b>,
      });
      console.log(values);
    },
  });
  return (
    <div>
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            {...formik.getFieldProps("email")}
            type="email"
            placeholder="email"
          ></Form.Control>
          <Form.Label>password:</Form.Label>
          <Form.Control
            {...formik.getFieldProps("password")}
            type="password"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
