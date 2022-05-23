import React from "react";
import { Box, FormLabel, Input } from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";

interface FormInputProps {
  labelFor: string;
  labelText: string;
  inputName: string;
  type: string;
  isInvalid: boolean;
  value: string;
  onChange: any;
}

const FormInput: React.FC<FormInputProps> = ({
  labelFor,
  labelText,
  inputName,
  type,
  isInvalid,
  value,
  onChange,
}) => {
  return (
    <Box display="flex" flexDirection="column" pt="8" position="relative">
      <FormLabel htmlFor={labelFor} color={isInvalid ? "crimson" : "inherit"}>
        {labelText}
      </FormLabel>
      <Field
        id={inputName}
        name={inputName}
        as={Input}
        isInvalid={isInvalid}
        value={value}
        onChange={onChange}
        errorBorderColor="crimson"
        focusBorderColor={isInvalid ? "crimson" : "inherit"}
        type={type}
      />
      {isInvalid ? (
        <div style={{ position: "absolute", top: "105px", color: "crimson" }}>
          <ErrorMessage name={inputName} component="span" />
        </div>
      ) : null}
    </Box>
  );
};

export default FormInput;
