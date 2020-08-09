<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <label for="text">Image URL</label>
              <input class="settings__url" type="text" v-model="imageUrl" />

              <chrome-picker :key="render" :value="$data._colorA" @input="setColorA" />
            </article>
            <h3 class="is-size-4">Color A</h3>
            <article
              :style="{backgroundColor: `rgb(${colorA})`}"
              class="tile is-child notification is-primary"
            >
            </article>
            <h3 class="is-size-4">Color B</h3>
            <article
              :style="{backgroundColor: `rgb(${colorB})`}"
              class="tile is-child notification is-warning"
            >
            </article>
          </div>
          <div class="tile is-parent">
          <preview-card 
            :colorA="colorA" 
            :colorB="colorB"
            :imageUrl="imageUrl" 
          />
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <preview-card 
            :colorA="colorB" 
            :colorB="colorA"
            :imageUrl="imageUrl" 
          />
      </div>
    </div>
  </div>
</template>

<script>
import { contrast, hexToRgb } from "../lib/ContrastCalculate";
import PreviewCard from './PreviewCard';
import { Chrome } from 'vue-color';

export default {
  name: "ContrastCalculator",
  props: {
    msg: String,
  },
  components: {
    'chrome-picker': Chrome,
    'PreviewCard': PreviewCard
  },
  data: () => ({
    test: "Constrast Calculator",
    colorA: [0, 0, 0],
    _colorA: '',
    colorB: [255, 0, 100],
    imageUrl: "https://bulma.io/images/placeholders/640x480.png",
    render:  0,
  }),
  computed: {
    contrast() {
      return contrast(this.colorA, this.colorB).toFixed(1);
    },
  },
  methods: {
    setColorA(color) {
      console.log(color)
        this.colorA = hexToRgb(color.hex);
        this.$data._colorA = color.hex;
       console.log(this.colorA)
       this.render++;
    }
  },
  mounted() {
    setTimeout(() => contrast(this.colorA, this.colorB), 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #000;
}
.notification {
  border: 1px solid #000;
}
.white {
  color: #fff !important;
}
.black {
  color: #000 !important;
}
.settings__url {
  width: 100%;
}
</style>
