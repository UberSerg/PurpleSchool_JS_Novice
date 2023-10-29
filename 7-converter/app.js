const amountOfFunds = "1000";
const currencyOfFunds = "RUB";
const targetCurrency = "USD";

function ConvertCurency (amountOfFunds, currencyOfFunds, targetCurrency) {
    conversionRates = giveConverionRate(currencyOfFunds,targetCurrency)
    return conversionRates != null? amountOfFunds * conversionRates : null;
}

function giveConverionRate (currencyOfFunds, targetCurrency) { 
    if (currencyOfFunds === "RUB" && targetCurrency === "USD") {
        return 0.0107;
    }
    else if (currencyOfFunds === "USD" && targetCurrency === "RUB") {
        return 93.22;
    }
    else if (currencyOfFunds === "RUB" && targetCurrency === "SEK") {
        return 0.119;
    }
    else if (currencyOfFunds === "SEK" && targetCurrency === "RUB") {
        return 8.35;
    }
    return null;
}

console.log(ConvertCurency(amountOfFunds, currencyOfFunds, targetCurrency));
console.log(ConvertCurency(amountOfFunds, "RUB", "SEK")); 
