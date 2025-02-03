import React from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PersonalDetailForm from "./components/personalDetailsForm";
import BoardingDetailsForm from "./components/boardingDetailsForm";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import Footer from "examples/Footer";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const AddTenants = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Tenants
                </MDTypography>
              </MDBox>

              {/* Add Tenant Details Form */}
              <PersonalDetailForm />
              <BoardingDetailsForm />

              <MDBox
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                width="100%"
                gap={4}
                pt={2}
                pb={3}
              >
                <MDButton variant="gradient" color="info" size="medium">
                  Clear Form
                </MDButton>
                <MDButton variant="gradient" color="info" size="medium">
                  Save
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AddTenants;
