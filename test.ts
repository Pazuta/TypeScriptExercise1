// Mensa URL: https://openmensa.org/api/v2/canteens/

const mensaUrl: string = "https://openmensa.org/api/v2/canteens/" // "https://bored-api.appbrewery.com/random"

let myResponse: Response = await fetch(mensaUrl) 

console.log(await myResponse.json())
