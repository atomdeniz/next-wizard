import { ErrorMessage } from "formik";
import React from "react";
import { object } from "yup";
import * as Yup from "yup";
import FormikStep from "../components/formikstep/formikstep";
import FormikStepper from "../components/formikstep/formikstepper";
import {
  FormikFieldTextInput,
  FormikFieldCheckboxInput,
} from "../styled-components/Wizard";
import {
  FormValues,
  MultiStepFormProps,
} from "../interfaces/multistepforminterface";

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function MultiStepForm({ onSubmit }: MultiStepFormProps) {
  return (
    <FormikStepper<FormValues>
      initialValues={{
        firstName: "",
        lastName: "",
        wizard: false,
        magic: "",
        description: "",
      }}
      onSubmit={async (values) => {
        await sleep(500);
        onSubmit(values);
      }}
    >
      <FormikStep
        label="Personal Data"
        validationSchema={object({
          firstName: Yup.string().required(),
          lastName: Yup.string().required(),
          wizard: Yup.boolean().oneOf([true], "You must to be wizard"),
        })}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <FormikFieldTextInput
            name="firstName"
            id="firstName"
            aria-errormessage="errFirstName"
            aria-invalid="true"
          />
        </div>
        <ErrorMessage name="firstName">
          {(msg) => (
            <div id="errFirstName" style={{ color: "red" }}>
              {msg}
            </div>
          )}
        </ErrorMessage>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <FormikFieldTextInput
            name="lastName"
            id="lastName"
            aria-errormessage="errLastName"
            aria-invalid="true"
          />
        </div>

        <ErrorMessage name="lastName">
          {(msg) => (
            <div id="errLastName" style={{ color: "red" }}>
              {msg}
            </div>
          )}
        </ErrorMessage>

        <div>
          <label htmlFor="wizard">Are you wizard ? </label>
          <FormikFieldCheckboxInput
            name="wizard"
            type="checkbox"
            id="wizard"
            aria-errormessage="errWizard"
            aria-invalid="true"
          />
        </div>

        <ErrorMessage name="wizard">
          {(msg) => (
            <div id="errWizard" style={{ color: "red" }}>
              {msg}
            </div>
          )}
        </ErrorMessage>
      </FormikStep>
      <FormikStep
        label="Magic"
        validationSchema={object({
          magic: Yup.string().required(
            "You must know because you are wizard Harry"
          ),
        })}
      >
        <div>
          <label htmlFor="magic">Write a Spell</label>
          <FormikFieldTextInput
            name="magic"
            id="magic"
            aria-errormessage="errMagic"
            aria-invalid="true"
          />
        </div>
        <ErrorMessage name="magic">
          {(msg) => (
            <div id="errMagic" style={{ color: "red" }}>
              {msg}
            </div>
          )}
        </ErrorMessage>
      </FormikStep>
      <FormikStep label="More Info">
        <div>
          <label htmlFor="description">Description</label>
          <FormikFieldTextInput name="description" id="description" />
        </div>
      </FormikStep>
    </FormikStepper>
  );
}
