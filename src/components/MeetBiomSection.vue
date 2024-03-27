<template>
  <div class="container">
    <div class="greeting"><span>Meet biom</span></div>

    <div class="content w-1/2 ml-auto flex flex-col h-full justify-center">
      <div class="kicker">The Biom dispenser</div>

      <div class="heading">Redefine your experience of clean.</div>

      <div class="subheading">
        A quality engineered wipes dispenser that looks beautiful in your home, making better habits
        for your home and planet always within reach.
      </div>

      <ul class="feature-list">
        <li>
          <img
            alt="Beautiful design icon"
            class="logo"
            src="@/assets/images/beautiful-design-icon.png "
          />
          Beautiful design, fit for your home
        </li>
        <li>
          <img
            alt="Durable stainless steel icon"
            class="logo"
            src="@/assets/images/durable-stainless-steel-icon.png"
          />
          Durable stainless steel exterior
        </li>
        <li>
          <img alt="Non-toxic icon" class="logo" src="@/assets/images/non-toxic-icon.png" />
          Non-toxic, BPA free
        </li>
      </ul>

      <BaseButton text="Shop now" variant="sherpa-blue" :hover="true" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<style scoped>
.container {
  max-width: 1390px;
  height: 730px;
  background-image: url('@/assets/images/white-biom-mask.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.content {
}

.greeting {
  font-size: 185px;
  color: #f2f2f2;
  text-transform: lowercase;
  letter-spacing: -5.63px;
  @apply font-BrandonGrotesque font-bold;
  width: 5ch;
  text-wrap: nowrap;
  overflow: hidden;
  text-align: left;
  position: absolute;
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);

  span {
    display: inline-block;
    padding-left: 100%;
    animation: greeting-marquee 6s linear infinite;
  }
}

@keyframes greeting-marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.kicker {
  color: #002d33;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2.1px;
  @apply font-BrandonGrotesque font-normal;
}

.heading {
  color: #002d33;
  font-size: 36px;
  margin-top: 8px;
  @apply font-ChronicleDisplay font-black;
}

.subheading {
  color: #002d33;
  font-size: 18px;
  margin-top: 12px;
  @apply font-BrandonGrotesque font-normal;
}

.feature-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 42px;
}

.feature-list li {
  color: #002d33;
  font-size: 18px;
  display: flex;
  align-items: center;
  @apply font-BrandonGrotesque font-normal;
}

.feature-list li + li {
  margin-top: 35px;
}

.feature-list li .logo {
  width: 69px;
  height: 69px;
  margin-right: 22px;
}
</style>
