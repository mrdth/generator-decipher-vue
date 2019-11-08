<template>
  <div>
      Test
 </div>
</template>

<script>

export default {

  name: '<%= toolName %>',

  props: {
    examplesv: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      js_export: window.<%= toolName %>jsexport,
    };
  },

  computed: {
  },

  watch: {
  },

  mounted () {
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
