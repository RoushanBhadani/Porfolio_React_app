import { useState, useEffect } from "react";
import { subscribeToMailchimp } from "../services/mailchimp";
import { Calendar } from "primereact/calendar";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "./Validation/formConfigSubscriber";
import { usePostSubscriberMutation } from "../redux/slice/apiSlice";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [doSubscribe, { isLoading, isError }] = usePostSubscriberMutation();

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
        resetForm();
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <>
      <h5 className="mb-6" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
        Get the Latest Updates
      </h5>
      <div className="subscription-form mb-7">
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
            style={{borderRadius:10}}
            invalid={formik.touched.dob && formik.errors.dob ? true : false}
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
          <button type="submit" disabled={isLoading}>Subscribe</button>
        </form>

        {status === "success" && <p>Subscribed successfully!</p>}
        {status === "error" && <p>Something went wrong. Try again.</p>}
      </div>
    </>
  );
};

export default SubscriptionForm;
