#!/usr/bin/env node

const ncp = require('ncp').ncp;
const args = process.argv;

if (args[2] !== 'install') {
    console.log('Command not found');
    process.exit(0);
}

ncp(__dirname + '/../app', process.cwd(), function (err) {
 if (err) {
   return console.error(err);
 }

 console.log('Your project is correctly created, dont forget to launch commands before use it');
 console.log('npm install');
 console.log('npm install -g gulp');
});