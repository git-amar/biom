<template>
  <div
    class="block"
    @mouseover.stop.prevent="textIsVisible = true"
    @mouseleave.stop.prevent="textIsVisible = false"
  >
    <Transition>
      <div class="text" v-if="textIsVisible">
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
const textIsVisible = ref(false)
const backgroundImageSrc = `url(${props.imageSrc})`
</script>

<style scoped>
.block {
  position: relative;
  min-width: 535px;
  width: 535px;
  height: 415px;
  border-radius: 14px;
  overflow: hidden;
  cursor: default;
}

.block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: v-bind(backgroundImageSrc);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.5s ease;
}

.text {
  color: #fffafa;
  font-size: 22px;
  text-transform: lowercase;
  position: absolute;
  bottom: 22px;
  display: inline-block;
  left: 50%;
  transform: translate(-50%, 0);
  @apply font-ChronicleDisplay font-bold;
}

.block:hover::before {
  transform: scale(1.2);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
