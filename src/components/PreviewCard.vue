<template>
  <article :style="{backgroundColor: `${colorB}`}" class="tile is-child notification is-info">
    <p :style="{color: `${colorA}`}" class="is-size-1">Mind Blowing</p>
    <p
      :style="{color: `${colorA}`}"
      class="pb-3 is-size-4"
    >Weird image unlocks the secrets of the universe!?</p>
    <figure class="image is-4by3">
      <img :src="imageUrl" />
    </figure>
    <p :style="{color: `${colorA}`}" class="pt-3 is-size-3">Scientists can't explain it!</p>
    <p
      :style="{color: `${colorA}`}"
      class="py-3 is-size-5"
    >The above photo is a mystery, alien work or just another prank ?</p>
    <p :style="{color: `${colorA}`}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </article>
</template>

<script>
export default {
  name: "PreviewCard",
  props: {
    colorA: String,
    colorB: String,
    imageUrl: String,
  },
};
</script>

<style scoped>
</style>