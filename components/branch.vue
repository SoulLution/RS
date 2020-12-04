<template>
  <div class="w-1/2 h-full mb-10" :class="i % 2 === 0 ? 'pr-5' : 'pl-5'">
    <div class="flex flex-col bg-white rounded-30 px-10 py-8 w-full">
      <div class="flex flex-row justify-between">
        <h3
          class="flex flex-row items-center text-d_blue text-lg font-bold pr-2 w-3/5"
        >
          <span class="branch-title truncate" v-html="branch.title"></span>
          <pencil
            class=" text-svg_default hover:text-d_blue hover:border-d_blue"
            @click="$emit('open-title', true)"
          />
        </h3>
        <v-button
          title="Добавить"
          :plus="true"
          @click="$emit('add-answer', true)"
        />
      </div>
      <div class="flex flex-row w-full mt-8 text-sm justify-between">
        <div
          v-for="(type, j) in types"
          :key="j"
          class="type rounded-full py-3 px-2 text-center w-full whitespace-no-wrap cursor-pointer"
          :class="branch.type === j ? 'active text-d_blue' : 'text-C4'"
          @click="$emit('change-type', j)"
        >
          {{ type }}
        </div>
      </div>
      <div v-if="branch.type < 2" class="flex flex-col mt-2">
        <template v-for="(answer, j) in branch.answers">
          <div
            v-if="answer.title"
            :key="answer.id"
            class="flex flex-row justify-between items-center"
          >
            <v-radio
              class="w-1/2"
              :title="answer.title"
              :checked="branch.current === answer.id"
              @change="$emit('change-current', answer.id)"
            />
            <div class="flex flex-row">
              <pencil style="margin-left: 0" @click="$emit('open-answer', j)" />
              <delete
                class="text-red border-red"
                style="margin-left: 1.75rem"
                @click="$emit('remove-answer', j)"
              />
            </div>
          </div>
        </template>
      </div>
      <div v-else>
        <div class="w-full mt-4 h-6 px-2 border border-C4 text-C4">
          Произвольный ввод
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    branch: {
      type: Object,
      default: () => {}
    },
    i: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      types: ["Кнопки под сообщением", "Меню", "Текстовый ввод"]
    }
  }
}
</script>

<style lang="scss">
.branch-title {
  & * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
