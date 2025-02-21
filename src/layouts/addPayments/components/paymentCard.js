import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, Collapse } from "@mui/material";

import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

import PropTypes from "prop-types";
import { useState } from "react";

const PaymentCard = ({
  title,
  amountDetails,
  isChecked,
  handleChange,
  paymentState,
  handlePaymentMethod,
}) => {
  return (
    <Card sx={{ maxWidth: 800, mt: 2, p: 2 }}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleChange} />}
        label={`Add ${title} Payment`}
      />
      <Collapse in={isChecked}>
        <CardContent>
          {/* Select Month */}
          <MDInput type="month" fullWidth />
          <Grid container spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
            {Array.isArray(amountDetails) &&
              amountDetails?.map(({ label, amount }, index) => (
                <Grid item xs={6} key={index}>
                  <MDBox color="white" borderRadius="lg" shadow="lg" opacity={1} p={2}>
                    <Typography variant="h6">{label}</Typography>
                    <Typography variant="h4">Rs. {amount}</Typography>
                  </MDBox>
                </Grid>
              ))}

            {title === "Rent" && (
              <Grid item xs={6}>
                <MDBox color="white" borderRadius="lg" shadow="lg" opacity={1} p={2}>
                  <Typography variant="h6">Edit Rent Amount</Typography>

                  <MDBox display="flex" gap={2} alignItems="center">
                    <Typography variant="h4">Rs.</Typography>
                    <MDInput size="small" defaultValue={3000} type="number" />
                    <MDButton variant="gradient" color="info">
                      Edit
                    </MDButton>
                  </MDBox>
                </MDBox>
              </Grid>
            )}
          </Grid>

          <FormGroup row sx={{ mt: 2 }}>
            <FormControlLabel
              control={
                <Radio
                  name="bank"
                  checked={paymentState.bank}
                  onChange={() => handlePaymentMethod("bank")}
                />
              }
              label="Bank"
            />
            <FormControlLabel
              control={
                <Radio
                  name="cash"
                  checked={paymentState.cash}
                  onChange={() => handlePaymentMethod("cash")}
                />
              }
              label="Cash"
            />
          </FormGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
};

PaymentCard.propTypes = {
  title: PropTypes.string.isRequired,
  amountDetails: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  paymentState: PropTypes.shape({
    bank: PropTypes.bool.isRequired,
    cash: PropTypes.bool.isRequired,
  }).isRequired,
  handlePaymentMethod: PropTypes.func.isRequired,
};

export default PaymentCard;
