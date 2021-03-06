import React, { useState } from "react";
import FormikStepInterface from "../../interfaces/formikstep/formikstepinterface";
import { Formik, FormikConfig } from "formik";
import { FormButton, FormikForm } from "../../styled-components/Wizard";
import {
  WrapperProgressBar,
  WrapperProgressBarLi,
  WrapperProgressBarLiActive,
  WrapperProgressBarUl,
} from "../../styled-components/Stepper";

export default function FormikStepper<MyFormValues>({
  children,
  ...props
}: FormikConfig<MyFormValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepInterface>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik<MyFormValues>
      {...props}
      validationSchema={currentChild.props.validationSchema as object}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm autoComplete="off">
          <WrapperProgressBar>
            <WrapperProgressBarUl>
              {childrenArray.map((child, index) =>
                step > index - 1 || completed ? (
                  <WrapperProgressBarLiActive key={child.props.label}>
                    {child.props.label}
                  </WrapperProgressBarLiActive>
                ) : (
                  <WrapperProgressBarLi key={child.props.label}>
                    {child.props.label}
                  </WrapperProgressBarLi>
                )
              )}
            </WrapperProgressBarUl>
          </WrapperProgressBar>
          {currentChild}
          {step > 0 ? (
            <FormButton
              disabled={isSubmitting}
              color="primary"
              onClick={() => setStep((s) => s - 1)}
              type="button"
            >
              Back
            </FormButton>
          ) : null}
          <FormButton disabled={isSubmitting} color="primary" type="submit">
            {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
          </FormButton>
        </FormikForm>
      )}
    </Formik>
  );
}
