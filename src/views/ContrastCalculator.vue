<template>
  <div>
    <h2 class="is-size-2 mt-0 mb-2">Contrast Calculator</h2>
    <div class="tile is-ancestor">
      <div class="tile is-vertical parent-container">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification">
              <contrast-rating-card :contrast="contrast" />

              <div class="columns is-desktop">
                <div class="column">
                  <h3 class="is-size-4">Text Color</h3>
                  <color-picker :color="colorA" :setColor="setColorA" />
                </div>
                <div class="column">
                  <h3 class="is-size-4">Background Color</h3>
                  <color-picker :color="colorB" :setColor="setColorB" />
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
import { debounce } from "../lib/utils";
import PreviewCard from "../components/PreviewCard";
import ColorPicker from "../components/ColorPicker";
import ContrastRatingCard from "../components/ContrastRatingCard";

export default {
  name: "ContrastCalculator",
  components: {
    PreviewCard,
    ColorPicker,
    ContrastRatingCard,
  },
  data: () => ({
    test: "Constrast Calculator",
    colorA: "#000000",
    colorB: "#ffffff",
    imageUrl: "https://bulma.io/images/placeholders/640x480.png",
    render: 0,
    inversed: false,
    debouncedUpdate: undefined,
  }),
  watch: {
    $route() {
      this.updateColors();
    },
  },
  computed: {
    contrast() {
      return parseFloat(contrast(this.colorA, this.colorB).toFixed(1));
    },
  },
  methods: {
    setColorA(color) {
      this.colorA = color.hex;
      this.debouncedUpdate();
    },
    setColorB(color) {
      this.colorB = color.hex;
      this.debouncedUpdate();
    },
    getColorFromRoute(color) {
      return color ? `#${color}` : null;
    },
    stripHash(color) {
      return new String(color).replace("#", "");
    },
    updateColors() {
      const params = { ...this.$route.params };

      const colorA = this.getColorFromRoute(params.colorA);
      const colorB = this.getColorFromRoute(params.colorB);

      this.colorA = colorA ? colorA : "#000000";
      this.colorB = colorB ? colorB : "#ffffff";
    },
    updateRoute() {
      this.$router.push({
        name: "PreSelectedColors",
        params: {
          colorA: this.stripHash(this.colorA),
          colorB: this.stripHash(this.colorB),
        },
      });
    },
  },
  beforeMount() {
    this.debouncedUpdate = debounce(this.updateRoute, 1000);
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
  max-width: 1500px;
  margin: 0 auto;
}
</style>
