<template>
  <div>
    <div
      v-on:click="toggle"
      :style="{backgroundColor: `${color}`}"
      class="tile is-child notification color-bar"
    >
      <span class="light" :class="{dark: contrast < 5.5}">{{color}}</span>
    </div>

    <chrome-picker v-show="isOpen" :value="color" @input="setColor" :disableAlpha="true"></chrome-picker>
  </div>
</template>

<script>
import { Chrome } from "vue-color";
import { contrast } from "../lib/ContrastCalculate";

export default {
  name: "ColorPicker",
  components: {
    "chrome-picker": Chrome,
  },
  props: {
    color: String,
    setColor: Function,
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    contrast() {
      return contrast(this.color, "#000000").toFixed(1);
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.dark {
  color: aliceblue !important;
  text-shadow: 0px 1px 1px black !important;
}
.light {
  color: black;
  font-weight: bold;
  text-shadow: 0px 1px 1px #d3d3d3;
}

.vc-chrome {
  width: 100%
}
</style>