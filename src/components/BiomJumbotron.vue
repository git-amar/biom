<template>
  <div class="container">
    <div class="heading">
      <div>So fresh.</div>
      <div>So green.</div>
    </div>

    <div class="subheading">
      We believe that a more eco-friendly everyday makes a happier you and me. We're on a mission to
      put sustainability in reach with better-for-the-planet wipes that are easy, effective, and
      plastic-free.
    </div>

    <BaseButton text="Get started" />
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<style scoped>
.container {
  max-width: 1390px;
  height: 675px;
  border-radius: 14px;
  background-image: url('@/assets/images/white-and-black-bioms-kitchen.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  padding-left: 85px;
}

.heading {
  font-size: 56px;
  color: #fffafa;
  padding-top: 159px;
  @apply font-ChronicleDisplay;

  & * {
    @apply font-bold;
  }
}

.subheading {
  font-size: 18px;
  color: #fffafa;
  margin-top: 14px;
  width: 407px;
  @apply font-BrandonGrotesque font-light;
}
</style>
