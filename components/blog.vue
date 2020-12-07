<template>
  <div class="rounded-5 bg-white mt-15">
    <div
      class="flex flex-row justify-between items-center px-10 pt-7 pb-6 boredr-b border-black border-opacity-10"
    >
      <h2 class="font-bold text-2xl">Наш блог</h2>
      <span
        class="text-red flex flex-row items-center font-bold text-lg cursor-pointer"
      >
        Смотреть все
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          class="fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4596 5.45962C12.7135 5.20578 12.7135 4.79422 12.4596 4.54038L8.32305 0.403807C8.0692 0.149966 7.65765 0.149966 7.40381 0.403807C7.14997 0.657647 7.14997 1.0692 7.40381 1.32305L11.0808 5L7.40381 8.67696C7.14996 8.9308 7.14996 9.34235 7.40381 9.59619C7.65765 9.85004 8.0692 9.85004 8.32304 9.59619L12.4596 5.45962ZM-5.68248e-08 5.65L12 5.65L12 4.35L5.68248e-08 4.35L-5.68248e-08 5.65Z"
          />
        </svg>
      </span>
    </div>
    <div class="flex flex-row flex-wrap">
      <template v-for="item in list">
        <div
          :key="item.id"
          class="item w-1/2 flex flex-row justify-between pt-10 pb-8 pl-8 pr-6"
        >
          <div class="flex flex-col">
            <h4 class="font-bold text-lg mb-5">{{ item.title }}</h4>
            <span class="blog-about mb-5">{{ item.html }}</span>
            <div class="block mb-4 w-auto">
              <router-link
                class="w-auto text-link border-b border-link border-dashed hover:text-red hover:border-red"
                :to="'/blog' + item.id"
              >
                Читать дальше
              </router-link>
            </div>
            <span class="text-6F">Автор: {{ item.author }}</span>
          </div>
          <div
            class="img ml-7"
            :style="{ backgroundImage: `url(${item.img})` }"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.blog-about {
  overflow: hidden;
  position: relative;
  /* используйте это значение для расчёта высоты блока */
  line-height: 1.6rem;
  /* max-height = line-height (1.2) * число строк (3) */
  max-height: 8rem;
  /* исправлиление проблемы когда последнее слово не соединяется с правой стороны */
  text-align: justify;
  /* место для многоточия '…' */
  padding-right: 1em;
  &:before {
    content: "…";
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
}
.item {
  border-top: 1px solid #00000010;
  &:nth-child(even) {
    border-left: 1px solid #00000010;
  }
}
.img {
  max-width: 300px;
  min-width: 300px;
  height: 250px;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
