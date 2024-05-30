const { readFileSync, writeFileSync } = require('fs');
const { Server } = require('http');

console.log('hello, docker');

const DBPATH = '../db/db.json';

class DB {
  constructor() {
    this.data = JSON.parse(readFileSync(DBPATH, { encoding: 'utf8' }));
    this.isDirty = false;
  }

  getData() {
    if (this.isDirty) {
      this.data = JSON.parse(readFileSync(DBPATH, { encoding: 'utf-8' }));
      return this.data;
    }
    return this.data;
  }

  setData(data) {
    try {
      this.data = data;
      writeFileSync(DBPATH, JSON.stringify(data), { encoding: 'utf-8' });
    } catch (e) {
      this.isDirty = true;
    }
  }
}

const len = 100;

const dbManager = new DB();

for (let i = 0; i < len; i += 1) {
  const sub = len - i;
  console.log(
    `${i}%`, ''.padEnd(i, '-').padEnd(len, '*')
  )
}

const server = new Server((req, res) => {
  let resEnd = readFileSync('./html/index.html', { encoding: 'utf8' });

  resEnd += `from ${process.env.STUDY}`;

  resEnd += dbManager.getData().runCount;

  dbManager.setData(
    { ...dbManager.getData(), runCount: dbManager.getData().runCount + 1 }
  );

  res.end(
    resEnd,
  )
});

server.listen(3000);