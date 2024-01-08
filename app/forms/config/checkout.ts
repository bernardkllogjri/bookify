const form = {
  inputs: {
    email: {
      valueType: "text",
      value: "",
      defaultValidators: ["required", "email"],
    },
    billingAddress: {
      valueType: "text",
      value: "",
      defaultValidators: ["required"],
    },
    billingZip: {
      valueType: "text",
      value: "",
      defaultValidators: ["required"],
    },
    number: {
      valueType: "text",
      value: "",
      defaultValidators: [],
    },
    expirationDate: {
      valueType: "text",
      value: "",
      defaultValidators: [],
    },
    cvv: {
      valueType: "text",
      value: "",
      defaultValidators: [],
    },
    cardholderName: {
      valueType: "text",
      value: "",
      defaultValidators: [],
    },
  },
}

export default form;
