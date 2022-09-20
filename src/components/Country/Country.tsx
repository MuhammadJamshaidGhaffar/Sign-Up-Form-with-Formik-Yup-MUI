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

export const Country: React.FC<props> = ({
  handleNext,
  handleBack,
  setData,
  preValues,
}) => {
  const formik = useFormik({
    initialValues: {
      country: preValues.country,
    },
    validationSchema: Yup.object({
      country: Yup.string().min(4).required("Required"),
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
        label="Country"
        variant="standard"
        {...formik.getFieldProps("country")}
        error={formik.touched.country && formik.errors.country ? true : false}
        helperText={formik.errors.country}
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
