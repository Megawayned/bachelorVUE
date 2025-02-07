export function toEuro(euros) {
  return Math.floor(euros * 100) / 100;
}

export function restSchuldBerechung(schuld, monate, monatsRate, zinsen) {
  var q = 1 + zinsen / 1200;
  var restSchuld = toEuro(
    schuld * Math.pow(q, monate) -
      (monatsRate * (Math.pow(q, monate) - 1)) / (zinsen / 1200)
  );

  return restSchuld;
}

export function formatNumber(number) {
  const roundedNumber = Math.round(number * 100) / 100;
  return roundedNumber.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
