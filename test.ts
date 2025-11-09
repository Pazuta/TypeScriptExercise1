// Mensa URL: https://openmensa.org/api/v2/canteens/

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/" // "https://bored-api.appbrewery.com/random"
const city: string = "Leipzig"

async function mensaCounter(url: string, city: string) {

    let myResponse: Response = await fetch(mensaUrl);
    let data = await myResponse.json();

    // Filtert nur die Einträge der angegebenen Stadt
    let mensenOfCity = data.filter((mensa: any) => mensa.city === city);

    // Anzahl der Leipziger Mensen
    let anzahlCity = mensenOfCity.length;

    console.log(mensenOfCity);
    console.log("Anzahl Mensen in " + city + ": " + anzahlCity);
}

mensaCounter(mensaUrl, city)