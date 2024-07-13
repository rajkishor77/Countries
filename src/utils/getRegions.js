export default function getRegions(data){

    let regions = data.reduce((regions, country) => {

        if(!regions.includes(country.region)){
            regions.push(country.region);
        }

        return regions;
    }, []);

    return regions;
}