import React from "react";

import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

const BoardingDetailsForm = () => {
  return (
    <>
      <MDTypography variant="h6" color="black" px={3} py={2}>
        Boarding Details
      </MDTypography>
      <Grid container spacing={2} columns={12} px={3}>
        <Grid item md={6}>
          {/* <MDInput variant="outlined" label="Group No" fullWidth style={{ marginBottom: "16px" }} /> */}
          <FormControl sx={{ width: "100%" }} style={{ marginBottom: "16px" }}>
            <InputLabel id="tenant-select-label">Group No</InputLabel>
            <Select
              labelId="tenant-select-label"
              input={<OutlinedInput label="Tenant Name" />}
              style={{ height: 40 }}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>

          {/*label - Date of Admission */}
          <MDInput type="date" fullWidth style={{ marginBottom: "16px" }} />
          <MDInput
            variant="outlined"
            label="Advance Amount"
            fullWidth
            style={{ marginBottom: "16px" }}
          />
        </Grid>

        <Grid item md={6}>
          {/* <MDInput variant="outlined" label="Room No" fullWidth style={{ marginBottom: "16px" }} /> */}
          <FormControl sx={{ width: "100%" }} style={{ marginBottom: "16px" }}>
            <InputLabel id="tenant-select-label">Room No</InputLabel>
            <Select
              labelId="tenant-select-label"
              input={<OutlinedInput label="Tenant Name" />}
              style={{ height: 40 }}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="4">5</MenuItem>
            </Select>
          </FormControl>

          <MDInput
            variant="outlined"
            label="Rent (Rs.)"
            fullWidth
            style={{ marginBottom: "16px" }}
          />
          <MDInput
            variant="outlined"
            label="Advance Amount Paid on"
            fullWidth
            style={{ marginBottom: "16px" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BoardingDetailsForm;
