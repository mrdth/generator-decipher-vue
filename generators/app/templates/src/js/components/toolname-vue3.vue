<template>
  <div>
    {{ count }}
  </div>
</template>

<script lang="ts">

import { ref } from 'vue'

export default {
  name: '<%= toolNamePascal %>',
  props: {
    examplesv: {
      type: String,
      required: false,
      default: ''
    }
  },

  setup(props) {
    const jsExport = window.<%= toolNamePascal %>JsExport;
    const count = ref<number>(1);

    // watch(() => varName, (newValue, oldValue) => {
    // });

    // const varName = computed(() => {
    //   return;
    // });

    // onMounted(() => {
    // });

    return {
      count
    };
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
