/* global Vue */
import <%= toolNamePascal %> from './components/<%= toolName %>.vue';

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  Vue.component('<%= toolName %>-decipher', <%= toolNamePascal %>);

  const app = new Vue({
    el: '#<%= toolName %>'
  });
});
