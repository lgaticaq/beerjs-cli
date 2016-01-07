#!/usr/bin/env node

'use strict';

import program from 'commander';
import beerjs from 'beerjs-info';

program
  .parse(process.argv);

beerjs.getEvents().then((events) => {
  for (let event of events) {
    console.log(`Edición: ${event.title}`);
    console.log(`Fecha: ${event.date}`);
    console.log(`Lugar: ${event.place}`);
    console.log(`Tema: ${event.theme}`);
    console.log(`Expositores: ${event.expositors}\n`);
  }
}).catch(() => console.log('Eventos previos no encontrados'));
