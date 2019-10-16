const mix = require('laravel-mix');
const version = 'v1';
const toolname = '<%= toolName %>'

mix.setPublicPath('/')
mix.copy( 'src/xml/*.xml', `dist/isc${toolname}/${version}/`)
mix.js( 'src/js/index.js', `dist/isc${toolname}/${version}/static/${toolname}.js`);
