const fs = require('fs');

const adjectives = ['Amazing', 'Incredible', 'Fantastic', 'Epic', 'Legendary', 'Mysterious', 'Hidden', 'Ultimate', 'Secret', 'Final'];
const nouns = ['Adventure', 'Journey', 'Quest', 'Saga', 'Story', 'Tale', 'Battle', 'Chronicle', 'Legacy', 'Odyssey'];
const years = Array.from({length: 20}, (_, i) => 2005 + i); // 2005-2024

const movies = [];
for (let i = 1; i <= 10000; i++) {
  const title = `${adjectives[i % adjectives.length]} ${nouns[i % nouns.length]} ${i}`;
  const year = years[i % years.length];
  movies.push({ id: i, title, year });
}

fs.writeFileSync('moovi-recommendator/src/assets/movies.json', JSON.stringify(movies, null, 2));
console.log('Generated movies.json with', movies.length, 'entries');
