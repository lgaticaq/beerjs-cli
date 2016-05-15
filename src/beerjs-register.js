#!/usr/bin/env node

'use strict';

const program = require('commander');
const beerjs = require('beerjs-info');
const logo = require('./ascii-logo');
const open = require('open');
const chalk = require('chalk');

program
  .parse(process.argv);

beerjs.getRegister().then(data => {
  console.log(chalk.green(logo));
  if (data !== null && data !== undefined) {
    console.log(chalk.green(`Abriendo el enlace ${data} en tu navegador...`));
    open(data);
  } else {
    console.log(chalk.green('Lo sentimos, no hay cupos disponibles o aún no esta creado el evento'));
  }
}).catch(() => console.log(chalk.green('Evento no encontrado')));
