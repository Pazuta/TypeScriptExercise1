async function openMensaAPI(url: string, city: string): Promise<string[]> {     // call up OpenMensa API

    const urlResponse: Response = await fetch(mensaUrl);
    const urlData = await urlResponse.json();
    const filteredUrlData: string[] = urlData.filter((mensa: any) => mensa.city === city);
    return filteredUrlData;

}    

function createMensaNameArray(filteredUrlData: any): string[] {                 // put mensaNames from filteredUrlData into Array
    
    const mensaNames: string[] = [];
    filteredUrlData.forEach((mensa: any) => {
        mensaNames.push(mensa.name);
    });
    console.log(mensaNames);
    return mensaNames;
}

function countedMensaInCity(filteredUrlData: any, mensaNames: string[]) {       // counts number of cafeteria

    const countedMensa = filteredUrlData.length;
    console.log("Anzahl Mensen in " + city + ": " + countedMensa);
    return countedMensa;

}

function buildHTML(countedMensa: any, names: string[]) {                        // build HTML page
    
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

async function main() {                                                               // start the process

    let filteredMensaData: string[] = [];
    filteredMensaData = await openMensaAPI(mensaUrl, city);
    let mensaNames: string[] = createMensaNameArray(filteredMensaData);
    var countedMensa = countedMensaInCity(filteredMensaData, mensaNames);
    buildHTML(countedMensa, mensaNames);

}

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/"
const city: string = "Leipzig"

main();