import React from "react";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import NavbarTenantDropdown from "./components/navdropdown";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

const TenantPaymentHistory = () => {
  const sampleTenantData = [
    {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    {
      rent: "Paid",
      utilities: "Paid",
      date: new Date().toLocaleDateString("en-GB"),
    },
    {
      rent: "Paid",
      utilities: "Paid",
      date: new Date().toLocaleDateString("en-GB"),
    },
    {
      rent: "Paid",
      utilities: "Paid",
      date: new Date().toLocaleDateString("en-GB"),
    },
    {
      rent: "Paid",
      utilities: "Paid",
      date: new Date().toLocaleDateString("en-GB"),
    },
    {
      rent: "Paid",
      utilities: "Paid",
      date: new Date().toLocaleDateString("en-GB"),
    },
  ];

  const columns = [
    { Header: "Month", accessor: "month", width: "45%", align: "left" },
    { Header: "Rent", accessor: "rent", align: "center" },
    { Header: "Water/Electricity", accessor: "utility", align: "center" },
    { Header: "Paid Date", accessor: "date", align: "center" },
  ];

  const months = sampleTenantData[0].months;

  const rows = months.map((value, index) => ({
    key: index,
    month: value,
    rent: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {sampleTenantData[index + 1]?.rent || "-"}
      </MDTypography>
    ),
    utility: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {sampleTenantData[index + 1]?.utilities || "-"}
      </MDTypography>
    ),
    date: (
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        {sampleTenantData[index + 1]?.date || "-"}
      </MDTypography>
    ),
  }));

  return (
    <DashboardLayout>
      {/* Navbar */}
      <DashboardNavbar
        addNewBtn={
          <MDButton variant="gradient" color="info" size="medium">
            Add New Payment
          </MDButton>
        }
        dropdown={<NavbarTenantDropdown />}
      />
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
                  Tenant Payment History
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default TenantPaymentHistory;
