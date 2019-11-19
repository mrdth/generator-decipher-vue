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
      js_export: window.<%= toolNamePascal %>JsExport,
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
