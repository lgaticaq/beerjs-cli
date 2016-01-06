#!/usr/bin/env node

'use strict';

import program from 'commander';
import beerjs from 'beerjs-info';
import emoji from 'node-emoji';
import pkg from '../package.json';

program
  .version(pkg.version)
  .description('CLI para obtener información de Beerjs')
  .parse(process.argv);

beerjs().then((data) => {
  console.log(`Evento: ${data.evento.replace(':beerjs:', emoji.get('beer'))}`);
  console.log(`Fecha: ${data.fecha}`);
  console.log(`Donde: ${data.donde}`);
  console.log(`Direccion: ${data.direccion}`);
  console.log(`Hora: ${data.hora}`);
  console.log(`Tema: ${data.tema}`);
  console.log(`Requisito: ${data.requisito}`);
}).catch(() => console.log('Evento no encontrado'));
