const fs = require('fs');

const FILEPATH = ('now-music-sorted.csv');
fs.readFile(FILEPATH, (err, data) => {
    if (err) {
        console.log('File Read Error:', err.message);
    }
    const lines = data.toString().split('\n');
    console.log('Total Lines:', lines.length);

let tally = {};
let most = 0;
let mostKey = undifined;

    for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let cells = first.split(',');

    let artistName = cells[0];
    let songName = cells[1];
    let duration = cells[2];

    if (tally[artistName] === undifined) {
        tally[artistName] = 0;
    }
    tally[artistName]++;

    if (tally[artistName] >= most) {
        most = tally[artistName];
        mostKey = artistName;
    }
        console.log(artistName);
    }
});