import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  dob: "",
  email: "",
};

export const validationSchema = Yup.object({
  fullname: Yup.string().required("First name is required"),
  dob: Yup.date()
    .typeError("Invalid date format")
    .required("Date of birth is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
