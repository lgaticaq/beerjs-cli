#!/usr/bin/env node

'use strict';

const program = require('commander');
const beerjs = require('beerjs-info');
const logo = require('./ascii-logo');
const open = require('open');
const chalk = require('chalk');

program
  .parse(process.argv);

beerjs.getInfo().then(data => {
  console.log(chalk.green(logo));
  if (data.registro !== '') {
    console.log(chalk.green(`Abriendo el enlace ${data.registro} en tu navegador...`));
    open(data.registro);
  } else {
    console.log(chalk.green('Lo sentimos, no hay evento'));
  }
}).catch(() => console.log(chalk.green('Evento no encontrado')));
