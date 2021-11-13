import { Field, Form } from "formik";
import styled from "styled-components";

export const FormikFieldTextInput = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const FormikFieldCheckboxInput = styled(Field)`
  display: block;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

export const FormikForm = styled(Form)`
  display: inline-block;
  width: 70%;
`;

export const CenterDiv = styled.div`
  text-align: center;
`;

export const FormButton = styled.button`
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;
