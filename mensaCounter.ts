// Mensa URL: https://openmensa.org/api/v2/canteens/

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/" // "https://bored-api.appbrewery.com/random"
const city: string = "Leipzig"

async function openMensaAPI(url: string, city: string): Promise<string[]> {            // ruft OpenMensaAPI auf

    const myResponse: Response = await fetch(mensaUrl);
    const data = await myResponse.json();
    // Filtert nur die Einträge der angegebenen Stadt
    const mensenInCity: string[] = data.filter((mensa: any) => mensa.city === city);
    // console.log(await mensenInCity)                     // Array wird in der Konsole ausgegeben
    return mensenInCity;                            // bei "console.log(await openMensaAPI(mensaUrl, city))"  wird Promise zurückgegeben

}    

function createMensaNameArray(mensenInCity: any): string[] {                  // speichert Namen der Mensen in einem Array
    
    let names: string[] = [];
    console.log(mensenInCity);
    mensenInCity.forEach((mensa: any) => {
        names.push(mensa.name);
    });
    return names;
}

function countedMensaInCity(mensenInCity: any, names: string[]) {   // zählt Mensen in der Stadt

    let countedMensa = mensenInCity.length;
    console.log(names);
    console.log("Anzahl Mensen in " + city + ": " + countedMensa);
    return countedMensa;

}

function buildHTML(countedMensa: any, names: string[]) {              // baut HTML Seite auf
    
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

function main() {

    let mensenData: string[] = [];
    openMensaAPI(mensaUrl, city).then(mensenInCity => {
        mensenData = mensenInCity;
        let names: string[] = createMensaNameArray(mensenData);
        var countedMensa = countedMensaInCity(mensenData, names);
        buildHTML(countedMensa, names);
    });

}

main();


/*
openMensaAPI(mensaUrl, city).then(mensenInCity => {
    console.log(mensenInCity)
});

 main();

*/
