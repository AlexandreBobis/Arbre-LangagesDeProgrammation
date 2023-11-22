//! STEP 1

let tripToParse = "Perdita 8 10 8"

function parseTrip(trip) {
    if (typeof trip !== 'string') {
        trip = String(trip);
    }
    let tripArray = trip.split(" ")
    let tripObject = {
        name: tripArray[0],
        depart: parseInt(tripArray[1]),
        time: parseInt(tripArray[2]),
        price: parseInt(tripArray[3])
    }
    return tripObject;
}

parseTrip(tripToParse)

//! STEP 2

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips) {
    let tripObjects = [];
    for (let i = 0; i < trips.length; i++) {
        let tripObject = parseTrip(trips[i]);
        tripObjects.push(tripObject);
    }
    return tripObjects;
}

parseTrips(tripsToParse)

//! STEP 3

function getTripsPrice(trips) {
    let total = 0;
    let parsedTrips = parseTrips(trips);
    for (i = 0; i < parsedTrips.length; i++) {
        total += parsedTrips[i].price;
    }
    return total;
}

getTripsPrice(tripsToParse)

//! STEP 4

function checkCompatibility(tripA, tripB) {
    if ((tripA.depart + tripA.time) >= tripB.depart) {
        return false;
    } else {
        return true;
    }
}

let tripA = parseTrip(tripsToParse[0]);
let tripB = parseTrip(tripsToParse[1]);
let tripC = parseTrip(tripsToParse[2]);
let tripD = parseTrip(tripsToParse[3]);
// console.log(checkCompatibility(tripA, (tripC)));

//! STEP 5

function findCompatibilities(trips) {
    let compatibleTrips = [];
    let parsedTrips = parseTrips(trips);
    for (let i = 0; i < parsedTrips.length; i++) {
        for (let j = 0; j < parsedTrips.length; j++) {
            if (i != j) {
                if (checkCompatibility(parsedTrips[i], parsedTrips[j])) {
                    compatibleTrips.push([parsedTrips[i], parsedTrips[j]]);
                }
            } else if (i == j) {
                compatibleTrips.push([parsedTrips[i]]);
            }
        }
    }
    return compatibleTrips;
}

// console.log(findCompatibilities(tripsToParse))

//! STEP 6

function findBestPrice(trips) {
    let max = 0;
    let maxTrip = null;
    let compatibilities = findCompatibilities(trips);
    for (let i = 0; i < compatibilities.length; i++) {
        let currentTrip = compatibilities[i];
        let currentPrice = 0;
        for (let j = 0; j < currentTrip.length; j++) {
            currentPrice += currentTrip[j].price;
        }
        if (currentPrice > max) {
            max = currentPrice;
            maxTrip = currentTrip;
        }
    }
    return maxTrip;
}

// console.log(findBestPrice(tripsToParse))


const findBestPrice = (trips) => {
    let compatibilities = findCompatibilities(trips);
    let prices = [];
    for (let i = 0; i < compatibilities.length; i++) {
        let currentTrip = compatibilities[i];
        let currentPrice = 0;
        for (let j = 0; j < currentTrip.length; j++) {
            currentPrice += currentTrip[j].price;
        }
        prices.push(currentPrice);
    }
    return prices;
}

console.log(findBestPrice(parseTrips(tripsToParse)));