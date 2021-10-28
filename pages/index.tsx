import { Box, Card, CardContent } from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
import React, { useState } from "react";
import { object } from "yup";
import * as Yup from "yup";
import FormikStep from "../components/formikstep/formikstep";
import FormikStepper from "../components/formikstep/formikstepper";

const sleep = (time: any) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            firstName: "",
            lastName: "",
            wizard: false,
            magic: "",
            description: "",
          }}
          onSubmit={async (values) => {
            await sleep(3000);
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
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="firstName"
                component={TextField}
                label="First Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="lastName"
                component={TextField}
                label="Last Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="wizard"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: "Are you wizard Harry?" }}
              />
            </Box>
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
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="magic"
                component={TextField}
                label="Write a Spell"
              />
            </Box>
          </FormikStep>
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="description"
                component={TextField}
                label="Description"
              />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
