const parseCurrency = (currency: string) =>
  Number(currency.replace(/[^0-9.-]+/g, ""));

export default parseCurrency;
