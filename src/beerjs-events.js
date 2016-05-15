#!/usr/bin/env node

'use strict';

const program = require('commander');
const beerjs = require('beerjs-info');
const logo = require('./ascii-logo');
const chalk = require('chalk');
const moment = require('moment');
const Table = require('cli-table');

moment.locale('es');
program
  .parse(process.argv);

beerjs.getEvents().then(events => {
  console.log(chalk.green(logo));
  let _events;
  if (program.args.length !== 0) {
    _events = events.filter(x => /(\d+)([\w\W\d\s]+)/.exec(x.title)[1] === program.args[0]);
  } else {
    _events = events;
  }
  const table = new Table({head: ['Edición', 'Fecha', 'Lugar', 'Tema', 'Expositores']});
  for (let event of _events) {
    const date = moment(event.date, 'dddd D MMMM YYYY').format('YYYY-MM-DD');
    table.push([event.title.split(' ')[0], date, event.place, event.theme, event.expositors]);
  }
  console.log(chalk.green(table.toString()));
}).catch(() => console.log(chalk.green('Eventos previos no encontrados')));
