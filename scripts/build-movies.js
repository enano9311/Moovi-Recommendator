const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const TMP = '/tmp/wikipedia_movies.json';
const URL = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';

// download dataset
console.log('Downloading dataset...');
execSync(`curl -L -o ${TMP} ${URL}`, { stdio: 'inherit' });

const raw = JSON.parse(fs.readFileSync(TMP, 'utf8'));
const recent = raw.filter(m => m.year >= 2005);

const directors = ['James Cameron','Christopher Nolan','Patty Jenkins','Steven Spielberg','Greta Gerwig','Denis Villeneuve'];

const results = [];
while (results.length < 10000) {
  const m = recent[results.length % recent.length];
  const runtime = 80 + Math.floor(Math.random() * 61); // 80-140
  const rating = +(6 + Math.random() * 4).toFixed(1); // 6.0-10.0
  const votes = Math.floor(Math.random() * 100000);
  const director = directors[results.length % directors.length];
  results.push({
    id: results.length + 1,
    title: m.title,
    year: m.year,
    cast: m.cast,
    genres: m.genres,
    runtime,
    director,
    rating,
    votes,
    description: `${m.title} released in ${m.year}.`,
  });
}

const outPath = path.join(__dirname, '../moovi-recommendator/src/assets/movies.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
console.log('Wrote', results.length, 'movies to', outPath);
