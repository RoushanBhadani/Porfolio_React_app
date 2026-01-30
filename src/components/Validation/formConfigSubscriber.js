import * as Yup from "yup";

export const initialValues = {
  fullName: "",
  email: "",
};

export const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
