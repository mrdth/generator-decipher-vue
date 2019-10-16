/* global require */
import Vue from 'vue';

Vue.component('<%= toolName %>-decipher', require('./components/<%= toolName %>.vue'));

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  const app = new Vue({
    el: '#<%= toolName %>'
  });
});
