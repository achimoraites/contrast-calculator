<template>
<div class="container">
  <p>Color A {{colorA}}</p>
  <p>Color B {{colorB}}</p>
  <p>Have a contrast of   {{ contrast }}</p>

</div>
</template>

<script>
import { contrast } from '../lib/ContrastCalculate';
export default {
  name: 'ContrastCalculator',
  props: {
    msg: String
  },
    data: () => ({
    test: 'Constrast Calculator',
    colorA: [255, 255, 255],
    colorB: [255, 0, 100]
  }),
  computed: {
    contrast() {
      return contrast(this.colorA, this.colorB);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
