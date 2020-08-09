<template>
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
</template>

<script>
export default {
  name: "PreviewCard",
  props: {
    colorA: Array,
    colorB: Array,
    imageUrl: String,
  },
}
</script>

<style scoped>

</style>