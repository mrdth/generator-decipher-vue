/* global require */
import Vue from 'vue';
import <%= toolName %> from './components/<%= toolName %>.vue'

Vue.component('<%= toolName %>-decipher', <%= toolName %>);

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  const app = new Vue({
    el: '#<%= toolName %>'
  });
});
