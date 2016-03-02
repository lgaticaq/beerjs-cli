#!/usr/bin/env node

'use strict';

import program from 'commander';
import beerjs from 'beerjs-info';

program
  .parse(process.argv);

beerjs.getEvents().then((events) => {
  let _events;
  if (program.args.length !== 0) {
    _events = events.filter(x => /(\d+)([\w\W\d\s]+)/.exec(x.title)[1] === program.args[0]);
  } else {
    _events = events;
  }
  for (let event of _events) {
    console.log(`Edición: ${event.title}`);
    console.log(`Fecha: ${event.date}`);
    console.log(`Lugar: ${event.place}`);
    console.log(`Tema: ${event.theme}`);
    console.log(`Expositores: ${event.expositors}\n`);
  }
}).catch(() => console.log('Eventos previos no encontrados'));
