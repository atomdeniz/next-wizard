import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { object } from "yup";
import * as Yup from "yup";
import FormikStep from "../components/formikstep/formikstep";
import FormikStepper from "../components/formikstep/formikstepper";
import {
  FormikFieldTextInput,
  FormikFieldCheckboxInput,
  CenterDiv,
} from "../styled-components/Wizard";

const sleep = (time: any) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <CenterDiv>
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          wizard: false,
          magic: "",
          description: "",
        }}
        onSubmit={async (values) => {
          await sleep(1000);
          console.log("values", values);
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
          <label>First Name</label>
          <FormikFieldTextInput name="firstName" />
          <ErrorMessage name="firstName">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <label>Last Name</label>
          <FormikFieldTextInput name="lastName" />
          <ErrorMessage name="lastName">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
          <label>Are you wizard ? </label>
          <FormikFieldCheckboxInput name="wizard" type="checkbox" />
          <ErrorMessage name="wizard">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
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
          <label>Write a Spell</label>
          <FormikFieldTextInput name="magic" />
          <ErrorMessage name="magic">
            {(msg) => <div style={{ color: "red" }}>{msg}</div>}
          </ErrorMessage>
        </FormikStep>
        <FormikStep label="More Info">
          <label>Description</label>
          <FormikFieldTextInput name="description" label="Description" />
        </FormikStep>
      </FormikStepper>
    </CenterDiv>
  );
}
