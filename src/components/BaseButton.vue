<template>
  <div class="button" :class="[{ hover }, buttonVariantClass]">
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Variant = 'white' | 'sherpa-blue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'white',
    validator(value: Variant) {
      return ['white', 'sherpa-blue'].includes(value)
    }
  },
  hover: {
    type: Boolean,
    default: false
  }
})
const buttonVariantClass = computed(() => `button--${props.variant}`)
</script>

<style lang="scss" scoped>
.button {
  border-radius: 6px;
  width: 180px;
  height: 50px;
  text-transform: uppercase;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  letter-spacing: 1.95px;
  @apply font-BrandonGrotesque font-black;
  padding-top: 4px;
  transition: background-color 0.2s ease;
}

.button.button--white {
  background-color: #fff;
  color: #004a4c;
}

.button.button--sherpa-blue {
  color: #fffafa;
  background-color: #004a4c;

  &.hover:hover {
    background-color: #023436;
  }
}
</style>
