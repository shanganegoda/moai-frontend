import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AddPaymentDropdown = () => {
  const names = ["Janith Perera", "Jude Nalen"];
  const [selectedTenant, setSelectedTenant] = useState("");

  const handleChange = (event) => {
    setSelectedTenant(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Dropdown */}
      <FormControl fullWidth>
        <InputLabel id="tenant-select-label">Select Tenant</InputLabel>
        <Select
          labelId="tenant-select-label"
          value={selectedTenant}
          onChange={handleChange}
          input={<Input disableUnderline={false} />}
          style={{ height: 22 }}
          sx={{ mb: 3 }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {Array.isArray(names) &&
            names?.map((value, index) => (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddPaymentDropdown;
