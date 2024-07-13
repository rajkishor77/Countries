export default function getNativeName(country){

    if(!country[0].name.nativeName){
        return "N/A"
    }

    let nativeNameArray = Object.entries(country[0].name.nativeName);
    return nativeNameArray[0][1].official;
}