import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HOST } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  // Validation schema using Yup
  const navigate= useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name field is required."),
    designation: Yup.string().required("Designation field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email field is required."),
    password: Yup.string()
      .required("Password field is required.")
      .min(6, "Password must be at least 6 characters long."),
    surname: Yup.string().required("Surname field is required."),
    contactNo: Yup.string().required("Contact Number field is required."),
    address: Yup.string().required("Address field is required."),
  });

  // Initial form values
  const initialValues = {
    name: "",
    designation: "",
    email: "",
    password: "",
    surname: "",
    contactNo:"",
    address: "",
  };

  const handleSubmit = (values) => {
    axios.post(`${HOST}/quantum/register`,values).then(()=>{
        navigate('/dashboard')
    })
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Employee</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="p-4 border rounded bg-light shadow">
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name<span className="text-danger">*</span>:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="name" component="small" className="text-danger" />
            </div>

            {/* Designation Field */}
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation<span className="text-danger">*</span>:
              </label>
              <Field
                type="text"
                id="designation"
                name="designation"
                className={`form-control ${touched.designation && errors.designation ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="designation" component="small" className="text-danger" />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email<span className="text-danger">*</span>:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="email" component="small" className="text-danger" />
            </div>

            {/* Surname Field */}
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Surname<span className="text-danger">*</span>:
              </label>
              <Field
                type="text"
                id="surname"
                name="surname"
                className={`form-control ${touched.surname && errors.surname ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="surname" component="small" className="text-danger" />
            </div>
            {/* Surname Field */}
            <div className="mb-3">
              <label htmlFor="surname" className="form-label">
                Contact Number<span className="text-danger">*</span>:
              </label>
              <Field
                type="text"
                id="contactNo"
                name="contactNo"
                className={`form-control ${touched.contactNo && errors.contactNo ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="contactNo" component="small" className="text-danger" />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password<span className="text-danger">*</span>:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
              />
              <ErrorMessage name="password" component="small" className="text-danger" />
            </div>

            {/* Address Field */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address<span className="text-danger">*</span>:
              </label>
              <Field
                as="textarea"
                id="address"
                name="address"
                className={`form-control ${touched.address && errors.address ? "is-invalid" : ""}`}
                rows="3"
              />
              <ErrorMessage name="address" component="small" className="text-danger" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
