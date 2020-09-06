<template>
  <div>
    <h2 class="is-size-2 mt-0 mb-2">Contrast Calculator</h2>
    <div class="tile is-ancestor">
      <div class="tile is-vertical parent-container">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <h3>Contrast is {{contrast}}</h3>
              <label for="text">Image URL</label>
              <input class="settings__url" type="text" v-model="imageUrl" />

              <div class="columns is-desktop">
                <div class="column">
                  <h3 class="is-size-4">Color A</h3>
                  <div
                    :style="{backgroundColor: `${colorA}`}"
                    class="tile is-child notification color-bar"
                  ></div>
                  <chrome-picker :disableAlpha="true" :value="colorA" @input="setColorA" />
                </div>
                <div class="column">
                  <h3 class="is-size-4">Color B</h3>
                  <div
                    :style="{backgroundColor: `${colorB}`}"
                    class="tile is-child notification color-bar"
                  ></div>
                  <chrome-picker :disableAlpha="true" :value="colorB" @input="setColorB" />
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
    </div>
  </div>
</template>

<script>
import { contrast } from "../lib/ContrastCalculate";
import PreviewCard from "../components/PreviewCard";
import { Chrome } from "vue-color";

export default {
  name: "ContrastCalculator",
  components: {
    "chrome-picker": Chrome,
    PreviewCard: PreviewCard,
  },
  data: () => ({
    test: "Constrast Calculator",
    colorA: "#000000",
    colorB: "#ffffff",
    imageUrl: "https://bulma.io/images/placeholders/640x480.png",
    render: 0,
    inversed: false,
  }),
  watch: {
    $route() {
      this.updateColors();
    },
  },
  computed: {
    contrast() {
      return contrast(this.colorA, this.colorB).toFixed(1);
    },
  },
  methods: {
    setColorA(color) {
      this.colorA = color.hex;
      console.log(this.colorA);
    },
    setColorB(color) {
      this.colorB = color.hex;
      console.log(this.colorB);
    },
    getColorFromRoute(color) {
      return color ? `#${color}` : null;
    },
    updateColors() {
      const params = { ...this.$route.params };

      const colorA = this.getColorFromRoute(params.colorA);
      const colorB = this.getColorFromRoute(params.colorB);

      this.colorA = colorA ? colorA : "#000000";
      this.colorB = colorB ? colorB : "#ffffff";
    },
  },

  mounted() {
    this.updateColors();
  },
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
