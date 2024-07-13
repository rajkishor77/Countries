export default function getCurrencies(country){

    if(!country[0].currencies){
        return "N/A";
    }

    const currenciesArray = Object.entries(country[0].currencies);
    const currencyNames = currenciesArray.reduce((currencyNames, currency) => {
        currencyNames.push(' '+currency[1].name);
        return currencyNames;
    }, []);

    return currencyNames;
}