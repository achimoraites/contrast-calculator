<template>
<div>
  <h1>{{ test }}</h1>
</div>
</template>

<script>
export default {
  name: 'ContrastCalculator',
  props: {
    msg: String
  },
    data: () => ({
    test: 'Constrast Calculator'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
