const mix = require('laravel-mix');
require('laravel-mix-polyfill');

const version = 'v1';
const toolname = '<%= toolName %>';

mix.setPublicPath('/')
  .copy( 'src/xml/*.xml', `dist/isc${toolname}/${version}/`)
  .js( 'src/js/index.js', `dist/isc${toolname}/${version}/static/${toolname}.js`)
  .polyfill();
