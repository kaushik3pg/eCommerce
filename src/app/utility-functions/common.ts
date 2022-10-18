import { getNumberOfCurrencyDigits } from "@angular/common";

export const currentDate = new Date().toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric'});