<template>
  <EpHomeTile icon="opetussuunnitelma" :route="{ name: 'opetussuunitelmat' }">
    <template slot="header">
      <span>{{ $t('tilastot') }}</span>
    </template>
    <template slot="content">
      <p>{{ $t('tile-tilastot-kuvaus') }}</p>
  </template>
  </EpHomeTile>
</template>

<script lang="ts">
import { reactive, computed, defineComponent, ref } from '@vue/composition-api';
import EpHomeTile from '@shared/components/EpHomeTiles/EpHomeTile.vue';

export default defineComponent({
  name: 'TileTilastot',
  components: {
    EpHomeTile,
  },

  setup() {
    return {

    };
  },

});
</script>
