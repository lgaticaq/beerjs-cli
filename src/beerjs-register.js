#!/usr/bin/env node

'use strict';

import program from 'commander';
import beerjs from 'beerjs-info';
import logo from './ascii-logo';
import open from 'open';

program
  .parse(process.argv);

beerjs.getRegister().then((data) => {
  console.log(logo);
  if (data !== null) {
    console.log(`Abriendo el enlace ${data} en tu navegador...`);
    open(data);
  } else {
    console.log('Lo sentimos, no hay cupos disponibles');
  }
}).catch(() => console.log('Evento no encontrado'));
