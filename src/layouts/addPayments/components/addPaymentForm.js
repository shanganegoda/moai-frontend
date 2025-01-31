import React from "react";

import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Icon from "@mui/material/Icon";

const AddPaymentForm = () => {
  const handleDoneButton = () => {
    alert("Amount entered");
  };
  return (
    <>
      {/* Name */}
      <MDInput fullWidth variant="standard" label="Enter Name" sx={{ mb: 3 }} />

      {/* Rent/bill */}
      <MDTypography variant="h6">Payment Type (Rent/ Bill)</MDTypography>
      <FormGroup row>
        <FormControlLabel control={<Checkbox name="rent" />} label="Rent" />
        <FormControlLabel control={<Checkbox name="bill" />} label="Bill" />
      </FormGroup>

      {/* Amount */}
      <FormGroup row sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
        <MDInput
          fullWidth
          type="number"
          variant="standard"
          label="Enter Amount"
          value="3000"
          sx={{ flex: 1, my: 2 }}
        />
        <MDButton variant="gradient" color="info" size="medium">
          <Icon>edit</Icon>&nbsp; Edit
        </MDButton>
      </FormGroup>

      {/* Bank/Cash */}
      <FormGroup row>
        <FormControlLabel control={<Checkbox name="bank" />} label="Bank" />
        <FormControlLabel control={<Checkbox name="cash" />} label="Cash" />
      </FormGroup>

      {/* Submit button */}
      <MDButton variant="gradient" color="info" size="medium" sx={{ mt: 3, width: "100%" }}>
        Done
      </MDButton>
    </>
  );
};

export default AddPaymentForm;
