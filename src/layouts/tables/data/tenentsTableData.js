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
import { actions } from "react-table";
import { fontSize } from "@mui/system";

import { Menu } from "@mui/material";
import NotificationItem from "examples/Items/NotificationItem";
import { useState } from "react";

export default function data() {
  const [openActionsMenu, setActionsMenu] = useState(false);
  const handleActionsMenuOpen = (event) => setActionsMenu(event.currentTarget);
  const handleActionsMenu = () => setActionsMenu(false);

  const Tenent = ({ image, name, email }) => (
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
      anchorEl={openActionsMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
      }}
      open={Boolean(openActionsMenu)}
      onClose={handleActionsMenu}
      sx={{ mt: 2 }}
    >
      <a href="#">
        <NotificationItem title="Item 1" />
      </a>
      <a href="#">
        <NotificationItem title="Item 2" />
      </a>
      <a href="#">
        <NotificationItem title="Item 3" />
      </a>
      <a href="#">
        <NotificationItem title="Item 4" />
      </a>
    </Menu>
  );

  // Sample Tenent Data
  const sampleTenentData = [
    {
      tenent: <Tenent image={team2} name="Jude Nelan 1" email="judenelan1@gmail.com" />,
      groupNumber: "01",
      roomNumber: "04",
      rent: "3000",
    },
    {
      tenent: <Tenent image={team3} name="Jude Nelan 2" email="judenelan2@gmail.com" />,
      groupNumber: "02",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenent: <Tenent image={team4} name="Jude Nelan 3" email="judenelan3@gmail.com" />,
      groupNumber: "03",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenent: <Tenent image={team3} name="Jude Nelan 4" email="judenelan4@gmail.com" />,
      groupNumber: "03",
      roomNumber: "05",
      rent: "3000",
    },
    {
      tenent: <Tenent image={team2} name="Jude Nelan 5" email="judenelan5@gmail.com" />,
      groupNumber: "02",
      roomNumber: "05",
      rent: "3000",
    },
  ];

  return {
    columns: [
      { Header: "Name", accessor: "tenent", width: "45%", align: "left" },
      { Header: "Group No.", accessor: "groupNo", align: "left" },
      { Header: "Room No.", accessor: "roomNo", align: "center" },
      { Header: "Rent", accessor: "rent", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows: sampleTenentData.map((value, index) => ({
      key: index,
      tenent: value.tenent,
      groupNo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.groupNumber || "01"}
        </MDTypography>
      ),
      roomNo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.roomNumber || "04"}
        </MDTypography>
      ),
      rent: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {value.rent || "3000"}
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
