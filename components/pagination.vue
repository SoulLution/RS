<template>
  <div class="flex flex-row w-full justify-end pr-24">
    <div class="flex flex-row">
      <template v-for="i in 4">
        <div
          :key="i"
          class="number mr-2 flex justify-center items-center rounded-full cursor-pointer border border-black border-opacity-0 hover:border-opacity-10 text-black text-opacity-25"
          :class="{
            'text-opacity-100 border-opacity-10': i + getCurrent - 2 === value
          }"
          @click="$emit('input', i + getCurrent - 2)"
        >
          {{ i + getCurrent - 2 }}
        </div>
      </template>
      <div
        class="number mr-2 flex justify-center items-center rounded-full cursor-pointer border border-black border-opacity-0 hover:border-opacity-10 text-black text-opacity-25"
        :class="{
          'text-opacity-100 border-opacity-10':
            5 + getCurrent - 2 === value && value !== max
        }"
        @click="$emit('input', 5 + getCurrent - 2)"
      >
        ...
      </div>
      <div
        class="number flex justify-center items-center rounded-full cursor-pointer border border-black border-opacity-0 hover:border-opacity-10 text-black text-opacity-25"
        :class="{
          'text-opacity-100 border-opacity-10': max === value
        }"
        @click="$emit('input', max)"
      >
        {{ max }}
      </div>
    </div>
    <input
      type="text"
      class="px-4 py-3 border rounded-5 border-black
    border-opacity-10 ml-8"
      placeholder="Введите номер ..."
    />
    <v-button class="ml-5" title="Перейти" />
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    }
  },
  computed: {
    getCurrent() {
      return this.value === 1
        ? 2
        : this.value < this.max - 3
        ? this.value
        : this.max - 3
    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  max-width: 38px;
  max-height: 38px;
  min-width: 38px;
  min-height: 38px;
}
</style>
