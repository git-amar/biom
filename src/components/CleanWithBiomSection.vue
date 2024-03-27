<template>
  <div class="flex flex-col align-center w-100">
    <div class="hashtag">&#35;cleanwithbiom</div>

    <Vue3Marquee direction="reverse" :duration="30">
      <img v-for="image in images" :key="image.id" :src="image.url" class="marquee-image" />
    </Vue3Marquee>

    <div class="button">
      <div class="text">Choose your vessel color</div>

      <div class="icon">
        <IconInstagram />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'
import { v4 } from 'uuid'
import furnitureWipping from '@/assets/images/furniture-wipping.png'
import biomWithWipe from '@/assets/images/biom-with-wipe.png'
import whiteBiomKitchenArrangement from '@/assets/images/kitchen-arrangement.png'
import livingRoomArrangement from '@/assets/images/living-room-arrangement.png'
import whiteBiomPlacement from '@/assets/images/white-biom-placement.png'
import handWipping from '@/assets/images/hand-wipping.png'
import IconInstagram from '@/assets/icons/instagram.svg?component'

type image = {
  id: string
  url: string
}
const images: Array<image> = [
  {
    id: v4(),
    url: furnitureWipping
  },
  {
    id: v4(),
    url: biomWithWipe
  },
  {
    id: v4(),
    url: whiteBiomKitchenArrangement
  },
  {
    id: v4(),
    url: livingRoomArrangement
  },
  {
    id: v4(),
    url: whiteBiomPlacement
  },
  {
    id: v4(),
    url: handWipping
  }
]
</script>

<style lang="scss" scoped>
.slide {
  width: 250px;
  height: 250px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hashtag {
  font-size: 36px;
  color: #002d33;
  text-transform: lowercase;
  text-align: center;
  @apply font-ChronicleDisplay font-black;
}

.vue3-marquee {
  margin-top: 50px;
}

.vue3-marquee.horizontal :deep(.marquee) {
  align-items: normal;
}

.marquee-image {
  width: 250px;
  height: 250px;
  margin-left: 30px;
  margin-right: 30px;

  &:nth-child(even) {
    box-sizing: content-box;
    width: 270px;
    height: 270px;
    border-top: 20px solid transparent;
  }
}

.button {
  border: 1px solid #002d33;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: fit-content;
  height: 50px;
  cursor: pointer;
  margin-top: 35px;
  overflow: hidden;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

.button .text {
  text-transform: uppercase;
  color: #004a4c;
  font-size: 11px;
  border-right: 1px solid #002d33;
  padding-left: 15px;
  padding-right: 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.3px;
  @apply font-BrandonGrotesque font-black;
  padding-top: 4px;
}

.button .icon {
  display: flex;
  align-self: stretch;
  justify-self: stretch;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  transition: background-color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;

    :deep(path) {
      transition: fill 0.2s ease;
    }
  }
}

.button:hover .icon {
  background: #002d33;

  svg :deep(path) {
    fill: #fff !important;
  }
}
</style>
