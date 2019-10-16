<template>
  <div>
      Test
 </div>
</template>

<script>

import Vue from 'vue'

export default {

  name: '<%= toolName %>',

  props: ['examplesv'],

  data () {
    return {
      jsx: window.<%= toolName %>jsexport,
    };
  },

  computed : {
  },

  watch: {
  },

  mounted() {
  },

  methods: {
  },

};

</script>

<style scoped>
  .hidden {
    display: none;
  }
</style>
