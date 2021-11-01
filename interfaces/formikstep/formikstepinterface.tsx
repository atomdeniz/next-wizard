import { FormikValues, FormikConfig } from "formik";

export default interface FormikStepInterface
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}
