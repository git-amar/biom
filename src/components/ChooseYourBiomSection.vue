<template>
  <div class="container">
    <div class="flex flex-row self-stretch align-center justify-center w-full pr-[25px]">
      <div class="self-center">
        <div class="heading">Ready to start wiping out waste?</div>
        <div class="button">
          <div class="text">Choose your vessel color</div>

          <div class="icon">
            <img src="@/assets/icons/arrow-right.svg?url" alt="Choose your vessel button icon" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row w-full">
      <ChooseYourBiomBlock
        :image-src="OceanTealBiom"
        heading="Biom Dispenser"
        sub-heading="Ocean Teal"
        class="mr-[-55px]"
      />
      <ChooseYourBiomBlock
        :image-src="WhiteBiom"
        heading="Biom Dispenser"
        sub-heading="White"
        class="mr-[-55px]"
      />
      <ChooseYourBiomBlock
        :image-src="BlackBiom"
        heading="Biom Dispenser"
        sub-heading="Ink Black"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChooseYourBiomBlock from '@/components/ChooseYourBiomBlock.vue'
import OceanTealBiom from '@/assets/images/ocean-teal-biom.png'
import WhiteBiom from '@/assets/images/white-biom.png'
import BlackBiom from '@/assets/images/black-biom.png'
</script>

<style scoped>
.container {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1390px;
  margin-left: auto;
  margin-right: auto;
}

.heading {
  color: #000000;
  font-size: 34px;
  width: 300px;
  @apply font-ChronicleDisplay font-black;
}

.button {
  border: 1px solid #002d33;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  cursor: pointer;
  margin-top: 35px;
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
  padding-left: 15px;
  padding-right: 15px;
}

.button .icon img {
  width: 18px;
  height: 12px;
  transition: transform 0.3s ease;
}

.button:hover .icon img {
  transform: translateX(2px);
}
</style>
