import countries from '../assets/data/countries.json';

export default function getCountryFN(cca3){
    for(let i=0; i<countries.length; i++){
        if(countries[i].cca3 === cca3){
            return countries[i].name.common;
        }
    }
    return "";
}