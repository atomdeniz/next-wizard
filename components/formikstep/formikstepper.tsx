import React, { useState } from "react";
import FormikStepInterface from "../../interfaces/formikstep/formikstepinterface";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { FormButton, FormikForm } from "../../styled-components/Wizard";
import {
  WrapperProgressBar,
  WrapperProgressBarLi,
  WrapperProgressBarLiActive,
  WrapperProgressBarUl,
} from "../../styled-components/Stepper";

export default function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
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
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
          alert(JSON.stringify(values));
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm autoComplete="off">
          {/* <style jsx>{`
            .wrapper-progressBar {
              width: 100%;
              padding-bottom: 15%;
            }

            .progressBar {
            }

            .progressBar li {
              list-style-type: none;
              float: left;
              width: 33%;
              position: relative;
              text-align: center;
            }

            .progressBar li:before {
              content: " ";
              line-height: 30px;
              border-radius: 50%;
              width: 30px;
              height: 30px;
              border: 1px solid #ddd;
              display: block;
              text-align: center;
              margin: 0 auto 10px;
              background-color: white;
            }

            .progressBar li:after {
              content: "";
              position: absolute;
              width: 100%;
              height: 4px;
              background-color: #ddd;
              top: 15px;
              left: -50%;
              z-index: -1;
            }

            .progressBar li:first-child:after {
              content: none;
            }

            .progressBar li.active {
              color: dodgerblue;
            }

            .progressBar li.active:before {
              border-color: dodgerblue;
              background-color: dodgerblue;
            }

            .progressBar .active:after {
              background-color: dodgerblue;
            }
          `}</style>
          <div className="wrapper-progressBar">
            <ul className="progressBar">
              {childrenArray.map((child, index) => (
                <li className={step > index - 1 || completed ? "active" : ""}>
                  {child.props.label}
                </li>
              ))}
            </ul>
          </div> */}
          <WrapperProgressBar>
            <WrapperProgressBarUl>
              {childrenArray.map((child, index) =>
                step > index - 1 || completed ? (
                  <WrapperProgressBarLiActive>
                    {child.props.label}
                  </WrapperProgressBarLiActive>
                ) : (
                  <WrapperProgressBarLi>
                    {child.props.label}
                  </WrapperProgressBarLi>
                )
              )}
            </WrapperProgressBarUl>
          </WrapperProgressBar>
          {/* <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
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
