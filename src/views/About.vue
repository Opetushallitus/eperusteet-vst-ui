<template>
   <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }} init: {{isInitializing}}
  </button>

</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({

  setup() {
    const isInitializing = ref(true);
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment,
      isInitializing,
    };
  },

});
</script>
