// Represents the core module in node.js called path. Path manipulates paths to files.
const pathFinder = require('path');

// Represents the core module in node.js called fs. FS reads and writes files onto the disk.
const fordSonic = require('fs');

const rover = require('request');

// Array of chirps.
let chirpArray = [
    {
        "chirp": "chirp #1"
    },
    {
        "chirp": "chirp #2"
    },
    {
        "chirp": "chirp #3"
    },
    {
        "chirp": "chirp #4"
    },
    {
        "chirp": "chirp #5"
    }
]

// Variable that calls the core module 'path' and links it to the chirps.json file.
let dataPath = pathFinder.join(__dirname, '../chirps.json');

// rover('https://reddit.com/r/popular.json', (err, res, body) => {
//     if(err) console.log(err);

//     fordSonic.writeFile(dataPath, res.body, err => {
//         if(err) console.log(err);
//     });
// });

// ALREADY BEEN USED ONCE. This code will write the chirpArray into chirps.json.
fordSonic.appendFile(dataPath, JSON.stringify(chirpArray));

// This is going to read the file from the path above (let dataPath...) (this is our JSON data).
fordSonic.readFile(dataPath, {

    // States the datatype
    encoding: "UTF-8",
}, 

// Callback function that attaches the value of the data to parameter 'data'
(err, data) => {

    // Parse the data (JSON object) to a readable object literal
    let chirpData = JSON.parse(data);

    // For loop that goes through the chirpArray.
    for(i = 0; i < chirpArray.length; i++) {

        // chirpData will parse the objects from the length of the chirpArray and console logs the property "chirp".
        console.log(chirpData[i].chirp);
        
    }
}); 