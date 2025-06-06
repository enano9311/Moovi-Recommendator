const fs = require('fs');
const path = require('path');
const assert = require('assert');

const dataPath = path.join(__dirname, '../moovi-recommendator/src/assets/movies.json');
const text = fs.readFileSync(dataPath, 'utf8');
const movies = JSON.parse(text);

assert(Array.isArray(movies), 'movies should be array');
assert(movies.length > 0, 'movies list should not be empty');

const m = movies[0];
const keys = ['id','title','year','cast','genres','runtime','director','rating','votes','description'];
keys.forEach(k => assert(Object.prototype.hasOwnProperty.call(m, k), 'missing ' + k));

console.log('All tests passed');
