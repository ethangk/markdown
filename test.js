var unified = require('unified');
var stream = require('unified-stream');
var markdown = require('remark-parse');
var toc = require('remark-toc');
var remark2rehype = require('remark-rehype');
var doc = require('rehype-document');
var format = require('rehype-format');
var html = require('rehype-stringify');
var md = require('remark-stringify');
var modifier = require('./modifier.js');
var fs = require('fs');
var retext = require('retext');
var report = require('vfile-reporter');

var processor = unified()
  .use(markdown)
  .use(modifier)
  .use(md, {
    bullet: '*',
    fence: '~',
    fences: true,
    incrementListMarker: false,
    listItemIndent: '1'
  });

process.stdin
  .pipe(stream(processor))
  .pipe(process.stdout);
