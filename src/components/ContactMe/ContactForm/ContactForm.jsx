import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./formConfig";
import { useCreateContactMutation } from "../../../redux/slice/apiSlice";
import emailjs from "emailjs-com";

import "./ContactForm.css";

const ContactForm = () => {
  const [createPost, { isLoading, isSuccess, error }] = useCreateContactMutation();
  const [showForm, setShowForm] = useState(true);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createPost(values).unwrap();
        await emailjs.send(
          "service_oadb1mm",
          "template_x0u12ep",
          {
            user_email: values.email,
            name: values.firstName + " " + values.lastName,
            message: values.description,
            time: new Date().toLocaleString(),
          },
          "-KnY3XNzugmhghvEk"
        );
        resetForm();
      } catch (err) {
        console.error("Error submitting form:", err);
      }
    },
  });

  const getPlaceholder = (name, defaultText) => {
    return formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : defaultText;
  };

  useEffect(() => {
    if (isSuccess) {
      setShowForm(false);
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="contact-form-content">
      {showForm ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="name-container">
            <input
              type="text"
              name="firstName"
              placeholder={getPlaceholder("firstName", "First Name *")}
              {...formik.getFieldProps("firstName")}
              className={
                formik.touched.firstName && formik.errors.firstName ? "error-border" : ""
              }
            />

            <input
              type="text"
              name="lastName"
              placeholder={getPlaceholder("lastName", "Last Name")}
              {...formik.getFieldProps("lastName")}
              className={
                formik.touched.lastName && formik.errors.lastName ? "error-border" : ""
              }
            />
          </div>

          <input
            type="text"
            name="email"
            placeholder={getPlaceholder("email", "Email *")}
            {...formik.getFieldProps("email")}
            className={
              formik.touched.email && formik.errors.email ? "error-border" : ""
            }
          />

          <input
            type="text"
            name="mobile"
            placeholder={getPlaceholder("mobile", "Mobile Number *")}
            {...formik.getFieldProps("mobile")}
            className={
              formik.touched.mobile && formik.errors.mobile ? "error-border" : ""
            }
          />

          <textarea
            name="description"
            rows={3}
            placeholder={getPlaceholder("description", "Message *")}
            {...formik.getFieldProps("description")}
            className={
              formik.touched.description && formik.errors.description
                ? "error-border"
                : ""
            }
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending" : "Send"}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-6xl">🎉 Thank you! Your message has been sent.</h3>
        </div>
      )}
    </div>
  );
};

export default ContactForm;