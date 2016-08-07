# beerjs-cli

[![npm version](https://img.shields.io/npm/v/beerjs-cli.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-cli)
[![npm downloads](https://img.shields.io/npm/dm/beerjs-cli.svg?style=flat-square)](https://www.npmjs.com/package/beerjs-cli)
[![dependency Status](https://img.shields.io/david/lgaticaq/beerjs-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs-cli#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/beerjs-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/beerjs-cli#info=devDependencies)

> Get beerjs info (Chile) CLI

## Installation

```bash
npm i -g beerjs-cli
```

## Use

```bash
beerjs info
beerjs events
beerjs register
```

## Example

```bash
$ beerjs info

Evento: BeerJS Santiago #9 🍺
Fecha: miércoles 6 de enero 2016
Donde: Yapo.cl
Direccion: Mariano Sanchez Fontencilla 310 of 1001
Hora: desde 19:30 hrs
Tema: Visualización de datos
Requisito: Traer hambre, sed y buena onda
```
```bash
$ beerjs events 6

┌─────────┬────────────┬──────────┬───────────────┬─────────────┐
│ Edición │ Fecha      │ Lugar    │ Tema          │ Expositores │
├─────────┼────────────┼──────────┼───────────────┼─────────────┤
│ 6ª      │ 2015-10-07 │ Platanus │ Angular y TDD │ @bunzli     │
└─────────┴────────────┴──────────┴───────────────┴─────────────┘
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
