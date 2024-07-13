export default function getSubregions(data, region){

    let subregions = data.reduce((subregions, country) => {
        if(country.region.toLowerCase() == region && !subregions.includes(country.subregion)){
            subregions.push(country.subregion);
        }
        return subregions;
    }, []);
    if(subregions[0] === undefined){
        return [];
    }
    return subregions;
}