<template>
  <div class="container">
    <div class="subscribe-box">
      <div class="content">
        <div class="heading">Get the latest news delivered to your inbox.</div>

        <div class="subheading">
          Get access to the exciting stuff — exclusive new deals, product launches and more. Plus,
          get a 10% discount on your next order.
        </div>

        <div class="email-input-container">
          <input type="email" placeholder="Enter your email address" />

          <div class="submit-button">
            <img src="@/assets/icons/arrow-right-white.svg?url" />
          </div>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="nav-item">
        <RouterLink to="/shop">Shop</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/why-biom">Why Biom</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/scents">Scents</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/">
          <img src="@/assets/svg/biom-logo-light.svg?url" alt="" />
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/faqs">Faqs</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/account">Account</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/help">Help</RouterLink>
      </div>
    </div>

    <div class="divider"></div>

    <div class="bottom">
      <div class="copyright">
        <div class="copyright-item">&#169; 2021 biom. All right reserved</div>
        <div class="copyright-item">
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
        </div>
        <div class="copyright-item">
          <RouterLink to="/privacy-policy">Terms of Service</RouterLink>
        </div>
      </div>

      <div class="social">
        <div class="social-button">
          <a href="https://www.instagram.com/">
            <img src="@/assets/icons/instagram.svg?url" alt="" />
          </a>
        </div>
        <div class="social-button">
          <a href="https://www.facebook.com/">
            <img src="@/assets/icons/facebook.svg?url" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 386px;
  background-color: rgba($color: #004a4c, $alpha: 0.72);
  margin-top: 150px;
  padding-top: 205px;
  width: 100%;
}

.subscribe-box {
  width: 1302px;
  height: 300px;
  border-radius: 14px;
  margin-left: auto;
  margin-right: auto;
  background-image: url('@/assets/images/biom-with-wipe-thin-banner-mask.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
}

.content {
  width: 414px;
  margin-left: 111px;
}

.heading {
  font-size: 30px;
  color: #000000;
  @apply font-ChronicleDisplay font-black;
}

.subheading {
  font-size: 16px;
  color: #000000;
  margin-top: 13px;
  @apply font-BrandonGrotesque font-normal;
}

.email-input-container {
  background-color: #fffafa;
  border-radius: 6px;
  width: 414px;
  height: 52px;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.email-input-container input {
  font-size: 16px;
  color: #000000;
  margin-left: 15px;
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 100%;
  @apply font-BrandonGrotesque font-normal;
  box-sizing: border-box;
  padding-top: 4px;

  &::placeholder {
    color: #000;
  }
}

.email-input-container .submit-button {
  width: 44px;
  height: 38px;
  background-color: #004a4c;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 7px;
  margin-left: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  img {
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #002d33;

    img {
      transform: translateX(1px);
    }
  }
}

.nav {
  display: flex;
  flex-direction: row;
  max-width: 50%;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.divider {
  height: 1px;
  background-color: #004a4c;
  width: 1302px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
}

.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1302px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
}

.copyright {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.copyright-item {
  position: relative;
  color: #fffafa;
  font-size: 15px;
  @apply font-BrandonGrotesque font-light;

  a {
    text-decoration: none;
    @apply font-BrandonGrotesque font-light;
  }
}

.copyright-item + .copyright-item::before {
  content: '\2022';
  padding-left: 10px;
  padding-right: 10px;
}

.nav-item a {
  text-decoration: none;
  color: #fffafa;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  @apply font-BrandonGrotesque font-medium;
  // padding-top: 4px;
}

.social {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.social-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fffafa;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  img {
    width: 16px;
    height: 16px;
  }
}

.social-button + .social-button {
  margin-left: 10px;
}
</style>
