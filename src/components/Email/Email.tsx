import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

type props = {
  handleNext: any;
  handleBack: any;
  setData: any;
  preValues: { email: string; password: string; country: string };
};

export const Email: React.FC<props> = ({
  handleNext,
  handleBack,
  setData,
  preValues,
}) => {
  const formik = useFormik({
    initialValues: {
      email: preValues.email,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      setData({ ...preValues, ...values });
      alert(JSON.stringify(values, null, 2));
      handleNext();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && formik.errors.email ? true : false}
        helperText={formik.errors.email}
      />
      <Box sx={{ mb: 2 }}>
        <div>
          <Button variant="contained" sx={{ mt: 1, mr: 1 }} type="submit">
            Continue
          </Button>
        </div>
      </Box>
    </form>
  );
};
