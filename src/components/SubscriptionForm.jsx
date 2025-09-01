import { useState, useEffect } from "react";
import { subscribeToMailchimp } from "../services/mailchimp";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "./Validation/formConfigSubscriber";
import { usePostSubscriberMutation } from "../redux/slice/apiSlice";
import emailjs from "emailjs-com";

const SubscriptionForm = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const [doSubscribe, { isLoading, isError, isSuccess }] =
    usePostSubscriberMutation();

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await subscribeToMailchimp(firstName, email);
  //     setStatus("success");
  //     setEmail("");
  //     setFirstName("");
  //   } catch (error) {
  //     setStatus("error");
  //   }
  // };

  const getPlaceholder = (name, defaultText) => {
    return formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : defaultText;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await doSubscribe(values).unwrap();
        await emailjs.send(
          "service_4wgt5ub",
          "template_mjcpx59",
          {
            user_email: values.email,
            name: values.fullname,
            dob: values.dob,
            time: new Date().toLocaleString(),
          },
          "-KnY3XNzugmhghvEk"
        );
        resetForm();
      } catch (error) {
        console.log(error.message);
      }
    },
  });

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
    <>
      <h5 className="mb-6" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
        Get the Latest Updates
      </h5>
      <div className="subscription-form mb-7">
        {showForm ? (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
            }}
          >
            <input
              type="text"
              name="fullname"
              placeholder={getPlaceholder("fullname", "Full Name *")}
              {...formik.getFieldProps("fullname")}
              className={
                formik.touched.fullname && formik.errors.fullname
                  ? "error-border"
                  : ""
              }
            />

            <div>
              <Calendar
                name="dob"
                placeholder={getPlaceholder("dob", "Date of birth *")}
                {...formik.getFieldProps("dob")}
                inputId="birth_date"
                maxDate={new Date("2017-12-31")}
                className={
                  formik.touched.dob && formik.errors.dob ? "error-border" : ""
                }
                style={{ borderRadius: 10 }}
                invalid={formik.touched.dob && formik.errors.dob ? true : false}
              />
            </div>

            <input
              type="text"
              name="email"
              placeholder={getPlaceholder("email", "Email *")}
              {...formik.getFieldProps("email")}
              className={
                formik.touched.email && formik.errors.email
                  ? "error-border"
                  : ""
              }
            />
            <button type="submit" disabled={isLoading}>
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-6xl">🎉 Thank you for subscribing us!</h3>
          </div>
        )}
        {isError && <p>Something went wrong. Try again.</p>}
      </div>
    </>
  );
};

export default SubscriptionForm;
