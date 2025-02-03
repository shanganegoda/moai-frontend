import React from "react";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import Grid from "@mui/material/Grid";

const PersonalDetailForm = () => {
  return (
    <>
      <MDTypography variant="h6" color="black" px={3} py={2}>
        Personal Details
      </MDTypography>
      <Grid container spacing={2} columns={12} px={3}>
        <Grid item md={6}>
          <MDInput variant="outlined" label="Name" fullWidth style={{ marginBottom: "16px" }} />
          <MDInput variant="outlined" label="City" fullWidth style={{ marginBottom: "16px" }} />
          {/*label - DOB */}
          <MDInput type="date" fullWidth style={{ marginBottom: "16px" }} />
          <MDInput variant="outlined" label="Age" fullWidth style={{ marginBottom: "16px" }} />
          <MDInput
            variant="outlined"
            label="Phone No."
            fullWidth
            style={{ marginBottom: "16px" }}
          />
        </Grid>

        <Grid item md={6}>
          <MDInput
            variant="outlined"
            label="Occupation"
            fullWidth
            style={{ marginBottom: "16px" }}
          />
          <MDInput
            variant="outlined"
            label="Emergency Contact Name"
            fullWidth
            style={{ marginBottom: "16px" }}
          />
          <MDInput
            variant="outlined"
            label="Emergency Contact No."
            fullWidth
            style={{ marginBottom: "16px" }}
          />
          <MDInput variant="outlined" label="NIC No." fullWidth style={{ marginBottom: "16px" }} />
          <MDInput variant="outlined" label="NIC Copy" fullWidth style={{ marginBottom: "16px" }} />
        </Grid>

        <Grid item md={12}>
          <MDInput label="Other Info" multiline rows={5} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalDetailForm;
