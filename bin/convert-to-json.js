#!/usr/bin/env node
'use strict';
var argv = require('yargs')
  .usage("convert-to-json")
  .alias("i","input")
  .describe("i", "GLOB expression of input files to convert")
  .string("i")
  .alias("o","outdir")
  .describe("o", "output path to send converted files")
  .string("o")
  .help()
  .argv
const inputGlob = argv.i || 'assets/*.xlsx';

console.log(`Input files : ${inputGlob}`)
