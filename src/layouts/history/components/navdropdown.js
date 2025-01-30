import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

const NavbarTenantDropdown = () => {
  const [tenantName, setTenantName] = useState("");

  const handleChange = (event) => {
    setTenantName(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>{tenantName || ""}</div>

        {/* Dropdown */}
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="tenant-select-label">Tenant Name</InputLabel>
          <Select
            labelId="tenant-select-label"
            value={tenantName}
            onChange={handleChange}
            input={<OutlinedInput label="Tenant Name" />}
            style={{ height: 40 }}
          >
            <MenuItem value="Jude Nalen">Jude Nalen</MenuItem>
            <MenuItem value="Jane Doe">Jane Doe</MenuItem>
            <MenuItem value="John Smith">John Smith</MenuItem>
            <MenuItem value="Alice Brown">Alice Brown</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default NavbarTenantDropdown;
