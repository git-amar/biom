<template>
  <div class="block">
    <div class="block-text-container">
      <div class="block-text-heading">{{ heading }}</div>
      <div class="block-text-subheading">{{ subHeading }}</div>
    </div>

    <img :src="imageSrc" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  subHeading: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.block {
  position: relative;
  width: 400px;
  height: 400px;
}

.block-text-container {
  flex: 1 0 auto;
  width: 0;
  overflow: 0;
  opacity: 0;
  position: absolute;
  bottom: 50px;

  .block-text-heading {
    color: #004a4c;
    font-size: 22px;
    color: #000;
    @apply font-ChronicleDisplay font-black;
  }

  .block-text-subheading {
    text-transform: uppercase;
    color: #004a4c;
    font-size: 14px;
    color: #000;
    @apply font-BrandonGrotesque font-medium;
    padding-top: 4px;
  }
}

.block img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: left 0.2s linear;
}

.block:hover img {
  left: 90px;
}

.block:hover .block-text-container {
  transition: opacity 0.2s linear 0.2s;
  width: auto;
  opacity: 1;
}
</style>
