/* global Vue */
<% if (vueVersion === "2") { %>import Vue from 'vue'<% } else { %>import { createApp } from 'vue';<% } %>
import <%= toolNamePascal %> from './components/<%= toolName %>.vue';

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
<% if (vueVersion === "2") { %>Vue.component('<%= toolName %>-decipher', <%= toolNamePascal %>);
  const app = new Vue({
    el: '#<%= toolName %>'
  });<% } else { %>  const app = createApp(<%= toolNamePascal %>).mount('#<%= toolName %>');<% } %>
});
