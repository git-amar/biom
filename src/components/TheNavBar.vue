<template>
  <div class="navbar" ref="navbar">
    <div class="navbar-inner">
      <ul class="link-list">
        <li class="link-list-item">
          <RouterLink to="/shop">Shop</RouterLink>
        </li>
        <li class="link-list-item">
          <RouterLink to="/why-biom">Why Biom</RouterLink>
        </li>
        <li class="link-list-item">
          <RouterLink to="/scents">Scents</RouterLink>
        </li>
      </ul>

      <div class="logo">
        <RouterLink to="/">
          <img alt="Biom logo" src="@/assets/svg/biom-logo-dark.svg?url" width="92" height="30" />
        </RouterLink>
      </div>

      <ul class="link-list">
        <li class="link-list-item">
          <RouterLink to="/sign-in">Sign in</RouterLink>
        </li>
        <li class="link-list-item">
          <RouterLink to="/cart">
            Cart
            <img
              alt="Cart icon"
              src="@/assets/icons/cart.svg?url"
              width="26"
              height="22"
              class="ml-1"
            />
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

const navbar = ref<HTMLDivElement>()

const changeNavbarBackgroundOnScroll = () => {
  if (window.scrollY > 10) {
    if (navbar.value && !navbar.value.classList.contains('transparent-background')) {
      navbar.value.classList.add('transparent-background')
    }
  } else if (window.screenY < 10) {
    if (navbar.value && navbar.value.classList.contains('transparent-background')) {
      navbar.value.classList.remove('transparent-background')
    }
  }
}

onMounted(() => {
  document.addEventListener('scroll', changeNavbarBackgroundOnScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', changeNavbarBackgroundOnScroll)
})
</script>

<style scoped>
.navbar {
  height: 68px;
  width: 100%;
  position: sticky;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  z-index: 99;

  &.transparent-background {
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
  }
}

.navbar-inner {
  height: 100%;
  max-width: 1390px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-left: 25px;
  padding-right: 25px;
}

.link-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inline-block;
}

.link-list-item {
  float: left;
}

.link-list-item + .link-list-item {
  margin-left: 26px;
}

.link-list-item a {
  font-size: 15px;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.5px;
  @apply font-BrandonGrotesque font-bold;
  padding-top: 5px;
}

.link-list-item a:hover {
  background-color: transparent;
}

.logo {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
