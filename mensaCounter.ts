// Mensa URL: https://openmensa.org/api/v2/canteens/

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/" // "https://bored-api.appbrewery.com/random"
const city: string = "Leipzig"

async function mensaCounter(url: string, city: string) {

    let myResponse: Response = await fetch(mensaUrl);
    let data = await myResponse.json();

    // Filtert nur die Einträge der angegebenen Stadt
    let mensenOfCity = data.filter((mensa: any) => mensa.city === city);

    

    // Gibt nur die Namen der Mensen aus
    const names: string[] = [];

    mensenOfCity.forEach((mensa: any) => {
        names.push(mensa.name);
    });


    // Anzahl der Leipziger Mensen
    let anzahlCity = mensenOfCity.length;

    console.log(names);
    console.log("Anzahl Mensen in " + city + ": " + anzahlCity);

    // HTML Anzeige

    
    let container = document.getElementById('container');
    if (container) {

        let element = document.createElement('div');
        element.innerText = "Anzahl Mensen in " + city + ": " + anzahlCity;
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

mensaCounter(mensaUrl, city)