<template>
  <div class="layout min-h-screen overflow-x-hidden">
    <Header />
    <transition name="slide-fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
        <!-- the content -->
      </main>
    </transition>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  components: {
    Footer,
    Header
  },

  metaInfo: {
    meta: [
      {
        property: 'og:title',
        content:
          'Navaneeth Vijay, Web developer based in Bengaluru specialising in Responsive Websites using HTML5, CSS3, SVG, Creative JavaScript'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'Front-End Developer, Bengaluru India. www.navaneethvijay.com.'
      },
      {
        property: 'og:url',
        content: 'www.navaneethvijay.com'
      }
    ]
    // etc...
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss">
@font-face {
  font-family: PlusJakartaDisplay;
  src: url('../assets/fonts/jakarta/PlusJakartaDisplay-Bold.ttf');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: PlusJakartaDisplay;
  src: url('../assets/fonts/jakarta/PlusJakartaDisplay-Medium.ttf');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: PlusJakartaDisplay;
  src: url('../assets/fonts/jakarta/PlusJakartaDisplay-Regular.ttf');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: PlusJakartaDisplay;
  src: url('../assets/fonts/jakarta/PlusJakartaDisplay-Light.ttf');
  font-weight: 300;
  font-display: swap;
}

.typed-element {
  display: flex;
  align-items: center;
}
.typed-element .typed-cursor {
  opacity: 1;
  animation: typedjsBlink 0.7s infinite;
}
@keyframes typedjsBlink {
  50% {
    opacity: 0;
  }
}

.clickhere {
  top: 50px;
  right: 0;
  display: flex;
  img {
    //  / transform: rotate(-90deg);
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.menu-slide {
  visibility: hidden;
  opacity: 0;
  z-index: 2;
  transform: translateX(100%);
}
.hideMenu {
  .menu-slide {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    animation-name: slideOut;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
    z-index: 2;

    &:nth-child(4) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
    }
    &:nth-child(1) {
      animation-delay: 1s;
    }
  }
}
.showMenu {
  .menu-slide {
    animation-name: slideInto;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    visibility: visible;
    opacity: 1;
    z-index: 2;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 1s;
    }
  }
}

@keyframes slideInto {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

header {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
}
.headling-line {
  height: 3px;
}
.text-accent-color {
  color: rgba(72, 48, 230, 0.1);
}
.text-accent-bg {
  background-color: rgba(72, 48, 230, 0.1);
}
.text-bg-accent {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 38%;
  background-color: rgba(72, 48, 230, 0.1);
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
.vertical-rl {
  writing-mode: vertical-rl;
  color: #0074d9;
  display: inline-block;
}

.hero-side-bg {
  background-color: #36117e;
}
.h-inherit {
  height: inherit;
}
.hero-img {
  position: relative;
  z-index: 1;
  max-height: 640px;
  @media (max-width: 767px) {
    width: 70%;
    margin-left: auto;
  }
}
.hero-img-backdrop {
  position: absolute;
  left: -80px;
  top: 80px;
  right: 80px;
  bottom: -80px;
  z-index: 0;
  display: block;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  background-position: 0% 0%;
  background-size: 20px;
  opacity: 0.3;

  @media (max-width: 767px) {
    left: 40px;
    top: 40px;
    right: 40px;
    bottom: -40px;
    background-size: 16px;
  }
}
.powers-img-backdrop-left {
  position: absolute;
  left: 0;
  top: 25%;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  width: 10%;
  height: 20%;
  opacity: 0.3;
}
.powers-img-backdrop-right {
  position: absolute;
  right: 0;
  bottom: 25%;
  background-image: url('https://assets.website-files.com/5d419732b8b3b47636fc4c66/5d41adf5f65670135f80e148_Pattern%20Dot.svg');
  width: 30%;
  height: 30%;
  opacity: 0.3;
}

.menu-main {
  height: 40px;
  width: 40px;
  @media (min-width: 1024px) {
    height: 50px;
    width: 50px;
  }
}

.menu {
  display: block;
  background-color: #eceafc;
  border-radius: 50%;
  z-index: 20;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.8s;
  &__line {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    border-radius: 13px;
    transition-duration: 0.5s;
    transition-delay: 0.8s;
    width: 25px;
    height: 3px;
    @media (min-width: 1024px) {
      width: 30px;
      height: 4px;
    }
    &:nth-child(1) {
      top: 14px;
    }
    &:nth-child(2) {
      top: 23px;
    }
    &:nth-child(3) {
      bottom: 14px;
    }
  }
  // hamburger menu transformation
  &.active {
    background-color: #fff;
    box-shadow: none;
  }
  &.active .menu__line:nth-child(1) {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
  &.active .menu__line:nth-child(2) {
    transition-duration: 0s;
    opacity: 0;
  }
  &.active .menu__line:nth-child(3) {
    transform: translate(-12px, -9px) rotate(45deg);
  }
}
</style>
