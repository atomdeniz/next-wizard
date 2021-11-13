export interface MultiStepFormProps {
  onSubmit: (formValue: FormValues) => void;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  wizard: boolean;
  magic: string;
  description: string;
}
