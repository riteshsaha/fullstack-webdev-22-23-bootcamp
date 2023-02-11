//jshint esversion:6

const fs = require('fs');
const superheroes = require('superheroes');

fs.copyFileSync("file1.txt", "file2.txt");

console.log(superheroes.random());