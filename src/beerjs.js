#!/usr/bin/env node

'use strict';

const program = require('commander');
const pkg = require('../package.json');
const logo = require('./ascii-logo');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .description('CLI get info of Beerjs')
  .command('info', 'obtener información del próximo evento')
  .command('events', 'obtener información de eventos previos')
  .command('register', 'ir al sitio a registrarse al evento')
  .parse(process.argv);

if (program.args.length === 0) {
  console.log(chalk.green(logo));
  program.help();
}
