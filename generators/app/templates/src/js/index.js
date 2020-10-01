/* global Vue */
import <%= toolNamePascal %> from './components/<%= toolName %>.vue';

// Boot Vue.js, and attach to the top level #survey element.
window.addEventListener('load', (event) => {
  <% if (vueVersion === "2") { %>
  Vue.component('<%= toolName %>-decipher', <%= toolNamePascal %>);

  const app = new Vue({
    el: '#<%= toolName %>'
  });
  <% } else { %>
  const app = Vue.createApp(<%= toolNamePascal %>)
    .mount('#<%= toolName %>');
  <% } %>
});
