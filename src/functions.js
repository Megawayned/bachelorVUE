export function toEuro(euros) {
    return Math.floor(euros * 100) / 100;
}

export function restSchuldBerechung(schuld, monate, monatsRate, zinsen) {
    var q = 1 + zinsen / 1200;
    var restSchuld = toEuro(schuld * Math.pow(q, monate) - monatsRate * (Math.pow(q, monate) - 1) / (zinsen / 1200));

    return restSchuld;
}
