import React, { useState } from "react";

import MDButton from "components/MDButton";

import AddPaymentDropdown from "./addPaymentDropdown";
import PaymentCard from "./paymentCard";

const AddPaymentForm = () => {
  const [state, setState] = useState({
    isRentChecked: false,
    isBillChecked: false,
    rentPayment: { bank: false, cash: false },
    billPayment: { bank: false, cash: false },
  });

  const handleCheckboxChange = (field) => {
    setState((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handlePaymentMethod = (type, method) => {
    setState((prev) => ({
      ...prev,
      [type]: {
        bank: method === "bank" ? !prev[type].bank : false,
        cash: method === "cash" ? !prev[type].cash : false,
      },
    }));
  };

  return (
    <>
      {/* Select Tenant */}
      <AddPaymentDropdown />

      {/* Rent Payment Card */}
      <PaymentCard
        title="Rent"
        amountDetails={[{ label: "Rent", amount: 3000 }]}
        isChecked={state.isRentChecked}
        handleChange={() => handleCheckboxChange("isRentChecked")}
        paymentState={state.rentPayment}
        handlePaymentMethod={(method) => handlePaymentMethod("rentPayment", method)}
      />

      <PaymentCard
        title="Bill"
        amountDetails={[
          { label: "Water Bill", amount: 1490 },
          { label: "Electricity Bill", amount: 1700 },
        ]}
        isChecked={state.isBillChecked}
        handleChange={() => handleCheckboxChange("isBillChecked")}
        paymentState={state.billPayment}
        handlePaymentMethod={(method) => handlePaymentMethod("billPayment", method)}
      />
      {/* Submit button */}
      <MDButton variant="gradient" color="info" size="medium" sx={{ mt: 3, width: "150px" }}>
        Add Payment
      </MDButton>
    </>
  );
};

export default AddPaymentForm;
