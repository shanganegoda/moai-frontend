/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { Menu } from "@mui/material";
import NotificationItem from "examples/Items/NotificationItem";
import { useState } from "react";

export default function data() {
  const [isOpenActionsMenu, isSetActionsMenu] = useState(false);
  const handleActionsMenuOpen = (event) => isSetActionsMenu(event.currentTarget);
  const handleActionsMenu = () => isSetActionsMenu(false);

  const Tenant = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  // Render the actions menu
  const renderActionsMenu = () => (
    <Menu
      anchorEl={isOpenActionsMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
      }}
      open={Boolean(isOpenActionsMenu)}
      onClose={handleActionsMenu}
      sx={{ mt: 2 }}
    >
      <a href="#">
        <NotificationItem title="Payment History" />
      </a>
      <a href="#">
        <NotificationItem title="Details" />
      </a>
      <a href="#">
        <NotificationItem title="Edit" />
      </a>
      <a href="#">
        <NotificationItem title="Deactivate" />
      </a>
    </Menu>
  );

  // Sample Tenent Data
  const sampleTenantData = [
    {
      tenant: <Tenant image={team2} name="Jude Nelan" />,
      groupNumber: "01",
      roomNumber: "04",
      rent: "3000",
    },
    {
      tenant: <Tenant image={team3} name="Jude Nelan" />,
      groupNumber: "02",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenant: <Tenant image={team4} name="Jude Nelan" />,
      groupNumber: "03",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenant: <Tenant image={team3} name="Jude Nelan" />,
      groupNumber: "03",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenant: <Tenant image={team2} name="Jude Nelan" />,
      groupNumber: "02",
      roomNumber: "05",
      rent: "3000",
    },
  ];

  return {
    columns: [
      { Header: "Name", accessor: "tenent", width: "45%", align: "left" },
      { Header: "Group No.", accessor: "groupNo", align: "center" },
      { Header: "Room No.", accessor: "roomNo", align: "center" },
      { Header: "Rent", accessor: "rent", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: sampleTenantData.map((value, index) => ({
      key: index,
      tenent: value.tenant,
      groupNo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.groupNumber || "-"}
        </MDTypography>
      ),
      roomNo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.roomNumber || "-"}
        </MDTypography>
      ),
      rent: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.rent || "-"}
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <MoreVertIcon fontSize="small" onClick={handleActionsMenuOpen} />
          {renderActionsMenu()}
        </MDTypography>
      ),
    })),
  };
}
