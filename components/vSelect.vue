<template>
  <label class="flex w-full flex-col items-start cursor-pointer">
    <div class="input w-full flex flex-row items-center justify-start relative">
      <select
        class="text-dark w-auto leading-6 rounded-md border border-transparent"
      >
        <option
          v-for="(child, i) in childs"
          :key="i"
          class="py-3 px-6"
          :value="child"
        >
          {{ name ? child[name] : child }}
        </option>
      </select>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Object],
      default: ""
    },
    childs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      data: this.value
    }
  },
  watch: {
    data(newData) {
      this.$emit("input", newData)
    },
    value(newData) {
      if (this.data !== newData) this.data = newData
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  left: 32px;
}
</style>
