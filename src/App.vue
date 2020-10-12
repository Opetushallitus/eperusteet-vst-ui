<template>
<div v-if="!state.isInitializing" class="minfull h-100">
  <router-view />
  <notifications style="margin-right: 6px; margin-top: 90px;"
                 position="top right"
                 :max="3" />
</div>
</template>

<script lang="ts">
import { delay } from '@shared/utils/delay';
import { defineComponent, onMounted, reactive } from '@vue/composition-api';

export default defineComponent({
  name: 'App',

  setup(props, { root }) {
    const state = reactive({
      isInitializing: true,
    });

    onMounted(async () => {
      const loader = root.$loading.show({
        color: '#2E5FD1',
      });
      // await Kayttajat.init();
      state.isInitializing = false;
      await delay(500);
      loader.hide();
    });

    return {
      state,
    };
  },
});

</script>

<style lang="scss">
@import 'vue-select/src/scss/vue-select.scss';

.minfull {
  min-height: 100vh;
}

body, html {
  height: 100%;
}
</style>
