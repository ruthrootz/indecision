function normalizeHours(hours) {
    return hours / 180;
}

function denormalizeHours(hours) {
    return hours * 180;
}

function normalizePeople(people) {
    return people / 20;
}

function denormalizePeople(people) {
    return people * 20;
}

let listOfPlaces = [
    "the mall",
    "book store",
    "Welch's",
    "Rizzi's",
    "Applebee's",
    "New Era",
    "Chipotle",
    "Strickland",
    "Steak N Shake",
    "McDonald's",
    "Nervous Dog",
    "Cafe Arnone",
    "Five Guys",
    "Shake Shack",
];

let trainingData = [
    { input : {
        numberOfPeople : normalizePeople(6),
        amountOfTime : normalizeHours(2),
        food : 0,
        coffee : 1,
        iceCream : 1,
    }, output : { "Strickland's" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(10),
        amountOfTime : normalizeHours(1),
        food : 1,
        coffee : 1,
        iceCream : 1,
    }, output : { "McDonald's" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(4),
        amountOfTime : normalizeHours(2),
        food : 0,
        coffee : 1,
        iceCream : 0,
    }, output : { "Nervous Dog" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(12),
        amountOfTime : normalizeHours(3),
        food : 1,
        coffee : 0,
        iceCream : 1,
    }, output : { "Steak N Shake" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(5),
        amountOfTime : normalizeHours(2),
        food : 0,
        coffee : 1,
        iceCream : 1,
    }, output : { "Cafe Arnone" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(7),
        amountOfTime : normalizeHours(2.5),
        food : 1,
        coffee : 0,
        iceCream : 0,
    }, output : { "Chipotle" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(13),
        amountOfTime : normalizeHours(3),
        food : 1,
        coffee : 1,
        iceCream : 1,
    }, output : { "New Era" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(17),
        amountOfTime : normalizeHours(2.5),
        food : 1,
        coffee : 0,
        iceCream : 1,
    }, output : { "Applebee's" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(20),
        amountOfTime : normalizeHours(2),
        food : 1,
        coffee : 0,
        iceCream : 1,
    }, output : { "Rizzi's" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(15),
        amountOfTime : normalizeHours(1.5),
        food : 0,
        coffee : 0,
        iceCream : 1,
    }, output : { "Welch's" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(4),
        amountOfTime : normalizeHours(1.75),
        food : 0,
        coffee : 1,
        iceCream : 0,
    }, output : { "book store" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(10),
        amountOfTime : normalizeHours(2.75),
        food : 1,
        coffee : 1,
        iceCream : 1,
    }, output : { "the mall" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(7),
        amountOfTime : normalizeHours(1.5),
        food : 1,
        coffee : 0,
        iceCream : 0,
    }, output : { "Five Guys" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(5),
        amountOfTime : normalizeHours(2),
        food : 1,
        coffee : 0,
        iceCream : 0,
    }, output : { "Five Guys" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(4),
        amountOfTime : normalizeHours(2),
        food : 1,
        coffee : 1,
        iceCream : 1,
    }, output : { "the mall" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(7),
        amountOfTime : normalizeHours(3),
        food : 1,
        coffee : 0,
        iceCream : 1,
    }, output : { "Shake Shack" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(12),
        amountOfTime : normalizeHours(3),
        food : 1,
        coffee : 0,
        iceCream : 0,
    }, output : { "Chipotle" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(9),
        amountOfTime : normalizeHours(1.5),
        food : 0,
        coffee : 1,
        iceCream : 0,
    }, output : { "book store" : 1 } },
    { input : {
        numberOfPeople : normalizePeople(10),
        amountOfTime : normalizeHours(3),
        food : 1,
        coffee : 1,
        iceCream : 1,
    }, output : { "New Era" : 1 } },
    // ADD MORE TEST DATA
];