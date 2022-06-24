var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");

planets.pop(planets);

var galaxy = constellations.concat(planets);

star = star.toUpperCase();

console.log(constellations, planets, star, galaxy);

console.log(star);

console.log(typeof star);