<template>
  <div>
    <h3 class="is-size-3">Contrast is {{contrast}}</h3>
    <div class="ratings-box columns is-desktop">
      <div
        v-bind:class="{'rating--pass': contrast >= 3, 'rating--fail': contrast < 3 }"
        class="column rating"
      >
        <h4>WCAG AA</h4>
        <span>Large Text</span>
      </div>
      <div
        v-bind:class="{'rating--pass': contrast >= 4.5, 'rating--fail': contrast < 4.5 }"
        class="column rating"
      >
        <h4>WCAG AA</h4>
        <span>Normal Text</span>
      </div>
      <div
        v-bind:class="{'rating--pass': contrast >= 4.5, 'rating--fail': contrast < 4.5 }"
        class="column rating"
      >
        <h4>WCAG AAA</h4>
        <span>Large Text</span>
      </div>
      <div
        v-bind:class="{'rating--pass': contrast >= 7, 'rating--fail': contrast < 7 }"
        class="column rating"
      >
        <h4>WCAG AAA</h4>
        <span>Normal Text</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContrastRatingCard",
  props: {
    contrast: Number,
  },

};
</script>

<style scoped>
h4 {
  font-weight: bold;
  font-size: 1.2 rem;
}

.ratings-box {
  margin: 1rem auto;
}

.rating {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.3rem;
  font-size: 1.1rem;
}

.rating--pass {
  background-color: green;
  color: white;
}
.rating--pass::after {
  content: "★ PASS";
  margin-top: 0.3rem;
  font-size: 1.2rem;
}
.rating--fail {
  background-color: red;
  color: white;
}
.rating--fail::after {
  content: "✘ FAIL";
  margin-top: 0.3rem;
  font-size: 1.2rem;
}
</style>