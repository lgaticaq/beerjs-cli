#!/usr/bin/env node

'use strict';

import program from 'commander';
import pkg from '../package.json';
import logo from './ascii-logo';
import updateNotifier from 'update-notifier';

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .description('CLI get info of Beerjs')
  .command('info', 'obtener información del próximo evento')
  .command('events', 'obtener información de eventos previos')
  .command('register', 'ir al sitio a registrarse al evento')
  .parse(process.argv);

if (program.args.length === 0) {
  console.log(logo);
  program.help();
}
