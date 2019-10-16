const mix = require('laravel-mix');
const version = 'v1';
const toolname = '<%= toolName %>'

mix.setPublicPath('/')
mix.copy( 'src/xml/*.xml', `dist/${version}/`)
mix.js( 'src/js/index.js', `dist/${version}/static/${toolname}.js`);
