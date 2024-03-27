<template>
  <div class="container">
    <video autoplay loop muted poster="@/assets/images/waves.png">
      <source src="@/assets/videos/waves.mp4" type="video/mp4" />
    </video>

    <div class="content">
      <div class="kicker">Cleaning our oceans with every wipe</div>

      <div class="heading">Wipes have plastic in them. We don't.</div>

      <div class="subheading">
        We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the
        environment, and toxic chemicals that don't belong in our oceans (or in our homes).
      </div>

      <BaseButton text="Learn more" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<style lang="scss" scoped>
.container {
  height: 675px;
  max-width: 1390px;
  border-radius: 14px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.content {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 50%;
}

.kicker {
  color: #fffafa;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  @apply font-BrandonGrotesque font-light;
}

.heading {
  font-size: 36px;
  color: #fffafa;
  margin-top: 6px;
  @apply font-ChronicleDisplay font-black;
}

.subheading {
  font-size: 18px;
  color: #fffafa;
  margin-top: 10px;
  @apply font-BrandonGrotesque font-light;
}
</style>
