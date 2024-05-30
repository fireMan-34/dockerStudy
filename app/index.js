const { readFileSync } = require('fs');
const { Server } = require('http');

console.log('hello, docker');

const len = 100;

for (let i = 0; i < len; i += 1) {
  const sub = len - i;
  console.log(
    `${i}%`, ''.padEnd(i, '-').padEnd(len, '*')
  )
}

const server = new Server((req, res) => {

  res.end(
    readFileSync('./html/index.html', { encoding: 'utf8' }),
  )
});

server.listen(3000);