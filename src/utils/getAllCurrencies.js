

export default function getAllCurrencies(countries) {

    let currencyArray = countries.reduce((currencyArray, country) => {
        if (country.currencies) {
            const currenciesArray = Object.entries(country.currencies);
            for (let i = 0; i < currenciesArray.length; i++) {
                if (!currencyArray.includes(currenciesArray[i][1].name)) {
                    currencyArray.push(currenciesArray[i][1].name);
                }
            }
        }

        return currencyArray;

    }, []);

    return currencyArray.sort();
}
