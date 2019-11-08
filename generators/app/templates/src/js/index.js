/* global require */
import Vue from 'vue';
import <%= toolNamePascal %> from './components/<%= toolName %>.vue';

Vue.component('<%= toolName %>-decipher', <%= toolNamePascal %>);

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  const app = new Vue({
    el: '#<%= toolName %>'
  });
});
