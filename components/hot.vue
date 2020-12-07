<template>
  <div class="rounded-5 bg-white pt-7 mt-15 px-10">
    <h2 class="font-bold text-2xl mb-7" style="color: #333333">
      Горячие предложения
    </h2>
    <div class="flex flex-row flex-wrap">
      <template v-for="item in list">
        <div :key="item.id" class="item mb-6 w-1/4">
          <div
            class="flex flex-col rounded-5 border border-black border-opacity-10 bg-white"
          >
            <router-link
              :to="'/order?id=' + id"
              class="img"
              :style="{ backgroundImage: `url(${item.img})` }"
            ></router-link>
            <div class="inline-flex flex-col px-5 pb-7">
              <h3 class="font-bold text-lg mt-4 mb-2">{{ item.title }}</h3>
              <span class="mb-4 text-9F">{{ item.district }}</span>
              <div>
                <span class="price text-lg"> от {{ item.price }} тенге </span>
              </div>
            </div>
          </div>
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
.item {
  padding-left: 5px;
  padding-right: 5px;
  &:nth-child(4n + 4) {
    padding-left: 5px;
    padding-right: 0;
  }
  &:first-child,
  &:nth-child(4n + 5) {
    padding-left: 0;
    padding-right: 5px;
  }
}
.img {
  width: 100%;
  height: 190px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 5px;
  transition: 0.3s;
  background-position: center;
  box-shadow: inset 0 0 0px 0px rgba(0, 0, 0, 1);
  cursor: pointer;
  &:hover {
    background-size: 110% 110%;
    box-shadow: inset 0 0 100px 1px rgba(0, 0, 0, 0.5);
  }
}
.price {
  color: #363636;
  position: relative;
  display: inline-flex;
  align-items: center;
  width: auto;
  &:after {
    content: "";
    min-width: 6px;
    min-height: 6px;
    max-width: 6px;
    max-height: 6px;
    margin-top: 4px;
    position: absolute;
    background-color: #2c5de5;
    border-radius: 50%;
    right: -14px;
  }
}
</style>
