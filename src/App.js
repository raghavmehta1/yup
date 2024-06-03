import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';
import Picture1 from './Picture1.png';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Picture2 from "./Picture2.png";

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <div className="logo">
        <img src={Picture2} alt="logo" />
        </div>
        <h2>Stay on top of time tracking</h2>
        <img src={Picture1} alt="illustration" className="floating-image" />
      </div>
      <div className="right-section">
        <h2>Create Account</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="signup-form">
            <div className="form-group">
              <Field type="text" id="firstName" name="firstName" placeholder="First Name" />
              <Field type="text" id="lastName" name="lastName" placeholder="Last Name" />
            </div>
            <ErrorMessage name="firstName" component="div" className="error" />
            <ErrorMessage name="lastName" component="div" className="error" />
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
            <Field type="password" id="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
            <button type="submit" className="create-account-btn">Create Account</button>
          </Form>
        </Formik>
        <p>Already have an account? <a href="/login">Login</a></p>
        <div className="social-login">
          <button className="google-btn"><FaGoogle /> Sign up with Google</button>
          <button className="facebook-btn"><FaFacebook /> Sign up with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;