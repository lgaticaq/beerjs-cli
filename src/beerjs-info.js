#!/usr/bin/env node

'use strict';

const program = require('commander');
const beerjs = require('beerjs-info');
const emoji = require('node-emoji');
const logo = require('./ascii-logo');
const chalk = require('chalk');

program
  .parse(process.argv);

beerjs.getInfo().then((data) => {
  console.log(chalk.green(logo));
  console.log(chalk.green(`Evento: ${data.evento.replace(':beerjs:', emoji.get('beer'))}`));
  console.log(chalk.green(`Fecha: ${data.fecha}`));
  console.log(chalk.green(`Donde: ${data.donde}`));
  console.log(chalk.green(`Direccion: ${data.direccion}`));
  if (data.hora !== null && data.hora !== undefined && data.hora !== '') {
    console.log(chalk.green(`Hora: ${data.hora}`));
  }
  console.log(chalk.green(`Tema: ${data.tema}`));
  console.log(chalk.green(`Requisito: ${data.requisito}`));
}).catch(() => console.log(chalk.green('Evento no encontrado')));
