<template>
  <transition-group name="confirm-popup">
    <div
      v-if="popup"
      key="bg"
      class="bg z-40"
      @click="$emit('close', false)"
    ></div>
    <div
      v-if="popup"
      key="content"
      class="flex flex-col rounded-t-30 bg-white fixed  w-full z-50"
    >
      <div class="flex flex-row justify-center py-4 px-8">
        <h2 class=" text-4xl mb-22">Проверка обращения</h2>
      </div>
      <div class="flex flex-row flex-wrap w-full pt-4 pb-8 px-8">
        <div v-if="more.a" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.a.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.a.value }}
            </span>
          </div>
        </div>
        <div v-if="more.b" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.b.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.b.value }}
            </span>
          </div>
        </div>
        <div v-if="more.c" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.c.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.c.value }}
            </span>
          </div>
        </div>
        <div v-if="more.d" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.d.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.d.value }}
            </span>
          </div>
        </div>
        <div v-if="more.e" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.i.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.e.value }}
            </span>
          </div>
        </div>
        <div v-if="more.f" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.f.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.f.value }}
            </span>
          </div>
        </div>
        <div v-if="more.g" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.g.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.g.value }}
            </span>
          </div>
        </div>
        <div v-if="more.h" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.h.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.h.value }}
            </span>
          </div>
        </div>
        <div v-if="more.i" class="w-1/3 pr-7">
          <div class="flex flex-col">
            <span class="font-bold">{{ more.i.title }}</span>
            <span
              class="rounded-5 border border-black border-opacity-25 mt-6 mb-7 p-4"
            >
              {{ more.i.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-center items-center">
        <v-button
          class="justify-center mr-6 px-6"
          style="height: 50px"
          title="Одобрить"
          @click="$emit('close', true)"
        />
        <span
          class="cursor-pointer text-lg text-red ml-6"
          @click="$emit('close', -1)"
        >
          Отклонить
        </span>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    popup: {
      type: Boolean,
      default: false
    },
    more: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #00000016;
}
.fixed {
  width: 90%;
  height: 80%;
  left: 5%;
  top: 10%;
}
</style>
