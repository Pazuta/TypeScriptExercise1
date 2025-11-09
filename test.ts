// Mensa URL: https://openmensa.org/api/v2/canteens/

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/" // "https://bored-api.appbrewery.com/random"
const city: string = "Leipzig"

async function mensaCounter(url: string, city: string) {

    let myResponse: Response = await fetch(mensaUrl);
    let data = await myResponse.json();

    // Filtert nur die Einträge mit city === "Leipzig"
    let leipzigMensen = data.filter((mensa: any) => mensa.city === "Leipzig");

    // Anzahl der Leipziger Mensen
    let anzahlCity = leipzigMensen.length;

    console.log(leipzigMensen);
    console.log("Anzahl Mensen in " + city + ": " + anzahlCity);
}

mensaCounter(mensaUrl, city)