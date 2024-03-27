<template>
  <div class="w-100 relative max-w-[1390px] ml-auto mr-auto">
    <div class="slider flex flex-row align-center flex-nowrap w-100 overflow-x-scroll">
      <WhereYouNeedItSliderBlock
        v-for="block in blocks"
        :key="block.id"
        :imageSrc="block.imageUrl"
        :text="block.text"
        class="block"
      />
    </div>

    <div
      class="title-container flex flex-col align-center justify-center cursor-default pointer-events-none"
    >
      <div class="kicker">where you need it.</div>

      <div class="title">
        when you<br />
        need it.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { v4 } from 'uuid'
import WhereYouNeedItSliderBlock from '@/components/WhereYouNeedItSliderBlock.vue'
import livingRoomImage from '@/assets/images/living-room.png'
import officeImage from '@/assets/images/office.png'
import kitchenImage from '@/assets/images/kitchen.png'
import bathroomImage from '@/assets/images/bathroom.png'

type block = {
  id: string
  imageUrl: string
  text: string
}
const blocks: Array<block> = [
  {
    id: v4(),
    imageUrl: livingRoomImage,
    text: 'living roomg'
  },
  {
    id: v4(),
    imageUrl: officeImage,
    text: 'office'
  },
  {
    id: v4(),
    imageUrl: kitchenImage,
    text: 'kitchen'
  },
  {
    id: v4(),
    imageUrl: bathroomImage,
    text: 'bathroom'
  }
]
</script>

<style scoped>
.slider {
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.block + .block {
  margin-left: 20px;
}

.title-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.kicker {
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  @apply font-BrandonGrotesque font-light;
}

.title {
  color: #ffffff;
  font-size: 78px;
  text-transform: lowercase;
  text-align: center;
  @apply font-ChronicleDisplay font-black;
}
</style>
