export default function getLanguages(country){

    if(!country[0].languages){
        return "N/A";
    }

    let languageArray = Object.entries(country[0].languages);

    return languageArray.reduce((languages, language) => {
        languages.push(' '+language[1]);
        return languages;
    }, []);
}