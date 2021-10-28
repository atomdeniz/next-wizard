import { FormikValues, FormikConfig } from "formik";

export default interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}
