<template>
  <!-- <div class="container">
  <div :style="{backgroundColor: `rgb(${colorA})`}">Color A {{`rgb(${colorA})`}}</div>
  <div :style="{backgroundColor: `rgb(${colorB})`}">Color B {{`rgb(${colorB})`}}</div>
  <p>Have a contrast of   {{ contrast }}</p>
  </div>-->
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
              <!-- <p :style="{color: `rgb(${colorA})`}" class="title">Color A </p>
              <p :style="{color: `rgb(${colorA})`}" >Has a contrast of   {{ contrast }} With Color B</p>-->
            </article>
            <h3 class="is-size-4">Color B</h3>
            <article
              :style="{backgroundColor: `rgb(${colorB})`}"
              class="tile is-child notification is-warning"
            >
              <!-- <p :style="{color: `rgb(${colorB})`}" class="title">Color B</p>
              <p :style="{color: `rgb(${colorB})`}">Has a contrast of   {{ contrast }} With Color A</p>-->
            </article>
          </div>
          <div class="tile is-parent">
            <article
              :style="{backgroundColor: `rgb(${colorB})`}"
              class="tile is-child notification is-info"
            >
              <p :style="{color: `rgb(${colorA})`}" class="is-size-1">Mind Blowing</p>
              <p
                :style="{color: `rgb(${colorA})`}"
                class="pb-3 is-size-4"
              >Weird image unlocks the secrets of the universe!?</p>
              <figure class="image is-4by3">
                <img :src="imageUrl" />
              </figure>
              <p
                :style="{color: `rgb(${colorA})`}"
                class="pt-3 is-size-3"
              >Scientists can't explain it!</p>
              <p
                :style="{color: `rgb(${colorA})`}"
                class="py-3 is-size-5"
              >The above photo is a mystery, alien work or just another prank ?</p>
              <p
                :style="{color: `rgb(${colorA})`}"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button
                :style="{color: `rgb(${colorA})`, backgroundColor: `rgb(${colorB})`}"
                class="button mt-3"
              >This is a button i guess</button>
              <button
                :style="{color: `rgb(${colorB})`, backgroundColor: `rgb(${colorA})`}"
                class="button mt-3 mx-2"
              >This is also a button</button>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article
          :style="{backgroundColor: `rgb(${colorA})`}"
          class="tile is-child notification is-info"
        >
          <p :style="{color: `rgb(${colorB})`}" class="is-size-1">Mind Blowing</p>
          <p
            :style="{color: `rgb(${colorB})`}"
            class="pb-3 is-size-4"
          >Weird image unlocks the secrets of the universe!?</p>
          <figure class="image is-4by3">
            <img :src="imageUrl" />
          </figure>
          <p :style="{color: `rgb(${colorB})`}" class="pt-3 is-size-3">Scientists can't explain it!</p>
          <p
            :style="{color: `rgb(${colorB})`}"
            class="py-3 is-size-5"
          >The above photo is a mystery, alien work or just another prank ?</p>
          <p
            :style="{color: `rgb(${colorB})`}"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            :style="{color: `rgb(${colorB})`, backgroundColor: `rgb(${colorA})`}"
            class="button mt-3"
          >This is a button i guess</button>
          <button
            :style="{color: `rgb(${colorA})`, backgroundColor: `rgb(${colorB})`}"
            class="button mt-3 mx-2"
          >This is also a button</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { contrast, hexToRgb } from "../lib/ContrastCalculate";
import { Chrome } from 'vue-color';

export default {
  name: "ContrastCalculator",
  props: {
    msg: String,
  },
  components: {
    'chrome-picker': Chrome
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
