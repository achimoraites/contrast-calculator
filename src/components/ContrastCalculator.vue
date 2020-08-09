<template>
  <div>
        <h2 class="is-size-2 mt-0 mb-2">Contrast Calculator</h2>
    <div class="tile is-ancestor ">
      <div class="tile is-vertical parent-container">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <label for="text">Image URL</label>
              <input class="settings__url" type="text" v-model="imageUrl" />

              <div class="columns is-desktop">
                <div class="column">
                  <h3 class="is-size-4">Color A</h3>
                  <div
                    :style="{backgroundColor: `rgb(${colorA})`}"
                    class="tile is-child notification color-bar"
                  ></div>
                  <chrome-picker :disableAlpha="true" :value="$data._colorA" @input="setColorA" />
                </div>
                <div class="column">
                  <h3 class="is-size-4">Color B</h3>
                  <div
                    :style="{backgroundColor: `rgb(${colorB})`}"
                    class="tile is-child notification color-bar"
                  ></div>
                  <chrome-picker :disableAlpha="true" :value="$data._colorB" @input="setColorB" />
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <preview-card
              :colorA="inversed ? colorB : colorA"
              :colorB="inversed ? colorA : colorB"
              :imageUrl="imageUrl"
            />
          </div>
        </div>
      </div>
      <!-- <div class="tile is-parent">
        <preview-card 
            :colorA="colorB" 
            :colorB="colorA"
            :imageUrl="imageUrl" 
          />
      </div>-->
    </div>
  </div>
</template>

<script>
import { contrast, hexToRgb } from "../lib/ContrastCalculate";
import PreviewCard from "./PreviewCard";
import { Chrome } from "vue-color";

export default {
  name: "ContrastCalculator",
  props: {
    msg: String,
  },
  components: {
    "chrome-picker": Chrome,
    PreviewCard: PreviewCard,
  },
  data: () => ({
    test: "Constrast Calculator",
    colorA: [0, 0, 0],
    _colorA: "",
    colorB: [255, 0, 100],
    _colorB: "",
    imageUrl: "https://bulma.io/images/placeholders/640x480.png",
    render: 0,
    inversed: false,
  }),
  computed: {
    contrast() {
      return contrast(this.colorA, this.colorB).toFixed(1);
    },
  },
  methods: {
    setColorA(color) {
      console.log(color);
      this.colorA = hexToRgb(color.hex);
      this.$data._colorA = color.hex;
      console.log(this.colorA);
    },
    setColorB(color) {
      console.log(color);
      this.colorB = hexToRgb(color.hex);
      this.$data._colorB = color.hex;
      console.log(this.colorB);
    },
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
.settings__url {
  width: 100%;
}
.color-bar {
    width: 226px;
}
.parent-container {
    max-width: 1100px;
    margin: 0 auto;
}
</style>
