<template>
  <header class="head bg-blue text-white">
    <div class="content flex flex-row justify-between">
      <router-link to="/" class="flex flex-row items-center">
        <img src="nur_otan.png" alt="Логотип" />
      </router-link>
      <nav class="flex flex-row items-center">
        <router-link class="px-4 py-8" to="/">Главная</router-link>
        <router-link class="px-4 py-8" to="/work">Работа у нас</router-link>
        <router-link class="px-4 py-8" to="/filials">Филиалы</router-link>
        <router-link class="px-4 py-8" to="/franchise">Франшиза</router-link>
        <router-link class="px-4 py-8" to="/blog">Блог</router-link>
      </nav>
      <div
        class="flex flex-row items-center relative"
        @mouseleave="menu = false"
      >
        <div class="flex flex-row items-center">
          <button
            class="py-3 px-8 border rounded-5 border-white border-opacity-10"
          >
            Выйти
          </button>
          <button
            class="rounded-5 bg-red border border-red text-white py-3 px-6 ml-3 hover:bg-transparent hover:text-red"
          >
            + Подать объявление
          </button>
        </div>
        <div
          class="ava rounded-full border border-9F bg-9F mx-4 overflow-hidden"
          style="background-image: url(nur_otan_logo.png)"
          @mousemove="menu = true"
        ></div>
        <img src="select_arrow.svg" />

        <transition name="fade-settings">
          <div v-show="menu" class="settings bg-white absolute flex flex-col">
            <div
              class="py-2 px-4 cursor-pointer hover:bg-cyan hover:text-white transition duration-150 "
            >
              Выйти
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  box-shadow: 0px 2px 2px 0px rgba(50, 50, 50, 0.32);
  & .ava {
    max-width: 50px;
    max-height: 50px;
    min-width: 50px;
    min-height: 50px;
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url("/nur_otan_logo.png");
  }
  & nav {
    & > a {
      position: relative;
      min-width: 150px;
      text-align: center;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        max-height: 0;
        background-color: white;
        transition: 0.3s;
      }
      &:hover {
        &:after {
          background-color: #ffffffe0;
          max-height: 4px;
        }
      }
      &.nuxt-link-exact-active {
        &:after {
          background-color: white;
          max-height: 4px;
        }
      }
    }
  }
  & .settings {
    height: auto;
    max-height: 100%;
    width: 100%;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    overflow: hidden;
    box-shadow: 0px 1px 6px #000000;
    &.fade-settings-enter-active,
    &.fade-settings-leave-active {
      transition: 0.3s;
    }
    &.fade-settings-enter,
    &.fade-settings-leave-to {
      max-height: 0%;
    }
  }
}
</style>
