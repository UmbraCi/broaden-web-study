#!/usr/bin/env node
'use strict';
const meow = require('meow');
const myMoudle = require('./');

const cli = meow(`
Usage
  $ my-moudle [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ my-moudle
  unicorns
  $ my-moudle rainbows
  unicorns & rainbows
`);
