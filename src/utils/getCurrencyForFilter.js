export default function getCurrencyForFilter(country) {

    if (!country.currencies) {
        return [];
    }

    const currenciesArray = Object.entries(country.currencies);
    const currencyNames = currenciesArray.reduce((currencyNames, currency) => {
        currencyNames.push(currency[1].name);
        return currencyNames;
    }, []);
    
    return currencyNames;
}