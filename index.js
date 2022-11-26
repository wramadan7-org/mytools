#! /usr/bin/env node
// Code above to make sure that CLI tool work correctly

import { program } from 'commander';
import log from './commands/log.js';

const { converdJson } = log;

const command = () => {
  program
    .command('type')
    .alias('t')
    .description('Output type')
    .action(converdJson);

  program
    .command('output')
    .alias('o')
    .description('Output file name')
    .action();

  program.parse();
};

command();
