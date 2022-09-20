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

export const Password: React.FC<props> = ({
  handleNext,
  handleBack,
  setData,
  preValues,
}) => {
  const formik = useFormik({
    initialValues: {
      password: preValues.password,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be greater than 6 digits")
        .required("Required"),
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
        label="Password"
        variant="standard"
        type="password"
        {...formik.getFieldProps("password")}
        error={formik.touched.password && formik.errors.password ? true : false}
        helperText={formik.errors.password}
      />
      <Box sx={{ mb: 2 }}>
        <div>
          <Button variant="contained" sx={{ mt: 1, mr: 1 }} type="submit">
            Continue
          </Button>
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </div>
      </Box>
    </form>
  );
};
