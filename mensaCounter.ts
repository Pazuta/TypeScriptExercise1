type Canteen = {
    id: number;
    name: string,
    city: string,
    address: string,
    coordinates: null | [number, number]
}

async function openMensaAPI(mensaUrl: string): Promise<Canteen[]> {     // call up OpenMensa API

    const urlResponse: Response = await fetch(mensaUrl);
    const canteens = await urlResponse.json();
    console.log(canteens);
    return canteens;

}    
/* erfordert Überarbeitung
function createMensaCityArray(urlData: string[]) {

    const urlDataSize = urlData.length;
    let uniqueCitys: string[] = []
    for (var i = 0; i < urlDataSize; i++) {
        if (urlData.indexOf(urlData[i]) === i) {

            uniqueCitys.

        };
    };
}
*/

function filterUrlData(canteens: Canteen[], city: string) {

    const filteredCanteens: Canteen[] = canteens.filter((mensa: any) => mensa.city === city);
    return filteredCanteens;

}

function createMensaNameArray(filteredCanteens: any): string[] {                 // put mensaNames from filteredUrlData into Array
    
    const mensaNames: string[] = [];
    filteredCanteens.forEach((mensa: any) => {
        mensaNames.push(mensa.name);
    });
    console.log(mensaNames);
    return mensaNames;
}

function countedMensaInCity(filteredCanteens: any, mensaNames: string[], city: string) {       // counts number of cafeteria

    const countedMensa = filteredCanteens.length;
    console.log("Anzahl Mensen in " + city + ": " + countedMensa);
    return countedMensa;

}

function buildHTML(countedMensa: any, names: string[], city: string) {                        // build HTML page
    
    let container = document.getElementById('container');
    if (container) {

        let element = document.createElement('div');
        element.innerText = "Anzahl Mensen in " + city + ": " + countedMensa;
        container.appendChild(element);
        
        for (let i = 0; i < names.length; i++) {
            let element = document.createElement('div');
            element.innerText = names[i];
            container.appendChild(element);
        };
        
    } else {
        console.error('Container element with id "container" not found');
    }
}

async function main() {           
    
    const mensaUrl: string = "https://openmensa.org/api/v2/canteens/"
    const city: string = "Leipzig"// start the process


    let canteens: Canteen[] = [];
    canteens = await openMensaAPI(mensaUrl)
    let filteredCanteens: Canteen[] = [];
    filteredCanteens = filterUrlData(canteens, city);
    
    let canteenNames: string[] = createMensaNameArray(filteredCanteens);
    var countedCanteens = countedMensaInCity(filteredCanteens, canteenNames, city);
    buildHTML(countedCanteens, canteenNames, city);

}

main();