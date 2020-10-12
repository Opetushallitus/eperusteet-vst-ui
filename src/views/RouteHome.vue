<template>
  <div>
    <Portal to="headerExtension">
      <div class="container">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col my-4 px-3 px-md-0">
              <h1>{{ $t('tervetuloa-vst', { nimi }) }}</h1>
              <p>{{ $t('tervetuloa-kuvaus-vst') }}</p>
            </div>
          </div>
        </div>
      </div>
    </Portal>
    <div class="container tile-container">
      <div class="d-flex flex-row flex-wrap justify-content-center">
        <TileOpetussuunnitelmat />
        <TileTiedotteet />
        <TileUkk />
        <TileOrganisaatio />
        <TileTilastot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Prop } from 'vue-property-decorator';
import EpSearch from '@shared/components/forms/EpSearch.vue';
import TileOpetussuunnitelmat from './tiles/TileOpetussuunnitelmat.vue';
import TileTiedotteet from './tiles/TileTiedotteet.vue';
import TileUkk from './tiles/TileUkk.vue';
import TileOrganisaatio from './tiles/TileOrganisaatio.vue';
import TileTilastot from './tiles/TileTilastot.vue';
// import { Meta } from '@shared/utils/decorators';
import { reactive, computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'RouteHome',
  components: {
    TileOpetussuunnitelmat,
    TileTiedotteet,
    TileUkk,
    TileOrganisaatio,
    TileTilastot,
  },

  setup() {
    const nimi = ref('Teppo Testaaja');
    return {
      nimi,
    };
  },

});

// @Component({
//   components: {
//     EpSearch,
//     TileOpetussuunnitelmat,
//   },
// })
// export default class RouteHome extends Vue {
//   private rajain = '';

//   @Meta
//   getMetaInfo() {
//     return {
//       title: this.$t('eperusteet-vst'),
//       titleTemplate: null,
//     };
//   }

//   get nimi() {
//     // return this.kayttajaStore?.nimi?.value || null;
//     return 'teppo testaaja';
//   }
// }
</script>

<style lang="scss" scoped>
@import '@shared/styles/_variables.scss';

.home-container {
  background-color: $etusivu-background;
  overflow: auto;
  min-height: 100vh;

  .header {
    color: white;
    background-color: $etusivu-header-background;
    background-position: 100% 0;
    background-repeat: no-repeat;
    @media only screen and (min-width: 2503px)  {
      background-size: 100%;
    }

    h1 {
      font-weight: 300;
    }
  }

  .tile-container {
    padding: 0;
    margin-top: 50px;
  }
}
</style>
