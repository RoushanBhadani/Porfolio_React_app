import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  email: "",
};

export const validationSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
