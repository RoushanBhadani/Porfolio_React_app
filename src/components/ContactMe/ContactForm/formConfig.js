import * as Yup from "yup";

export const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  description: "",
};

export const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().notRequired(),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  description: Yup.string().required("Message is required"),
});
