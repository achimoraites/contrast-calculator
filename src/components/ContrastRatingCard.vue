<template>
  <div class="card">
    <h3 class="is-size-3">Contrast is {{contrast}} ({{rating}}) </h3>
  </div>
</template>

<script>
export default {
  name: "ContrastRatingCard",
  props: {
    contrast: Number,
  },
  computed: {
    rating() {
      return this.calculateValue("AA", this.contrast);
    },
  },
  methods: {
    calculateValue(text, contrast) {
      console.log(contrast);
      return this.calculateAA(contrast);

      
    },
    calculateAA(contrast) {
      if (contrast < 3) {
        return "Very Poor";
      }
      if (contrast <= 4.5) {
        return "Poor";
      }
      if (contrast <= 7) {
        return "Good";
      }

      return "Very Good";
    }
  },
};
</script>

<style scoped>
</style>