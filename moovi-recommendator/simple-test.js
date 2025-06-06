const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const servicePath = path.join(__dirname, 'src', 'app', 'services', 'movie.service.ts');
const serviceContent = fs.readFileSync(servicePath, 'utf8');
assert(serviceContent.includes("tv/"), "MovieService should use lowercase 'tv/' endpoint");
assert(/getTVShow\(id: string\)/.test(serviceContent), 'getTVShow should accept a string id');
assert(/getMovie\(id: string\)/.test(serviceContent), 'getMovie should accept a string id');

console.log('Simple tests passed');

