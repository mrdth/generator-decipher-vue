/* global require */
import Vue from 'vue';

Vue.component('toolname-decipher', require('./components/toolname.vue'));

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  const app = new Vue({
    el: '#toolname'
  });
});
