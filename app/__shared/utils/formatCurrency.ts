const formatCurrency = (num: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    num
  );

export default formatCurrency;
