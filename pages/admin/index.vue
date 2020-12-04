<template>
  <div class="px-70px">
    <div class="flex flex-row justify-between items-center mt-15">
      <h1 class="page-title text-cyan text-2xl font-bold">
        Конструктор диалогов
      </h1>
      <div class="flex flex-col items-start">
        <div class="flex flex-row">
          <v-button class="mr-10" title="Приаязать шаблон" />
          <v-button
            title="Создать сообщение"
            :plus="true"
            @click="addBranch()"
          />
        </div>
      </div>
    </div>
    <input-popup
      v-if="popup"
      :type="popup_type"
      :value="checkValue"
      @close="e => addAnswer('', e)"
    />
    <div>
      <div class="flex flex-row mt-24 w-full">
        <div class="w-1/3 pr-11">
          <div
            class="sticky overflow-hidden pb-10 pt-5 flex flex-col items-center top-0 bg-white rounded-30"
          >
            <template v-for="item in templates">
              <div
                :key="item.id"
                class="template relative border-b border-black border-opacity-10 flex items-center py-12 pl-15 pr-8 w-full cursor-pointer"
                :class="{ active: item.id === current_template }"
                @click="current_template = item.id"
              >
                {{ item.title }}
              </div>
            </template>
            <v-button class=" mt-15" :plus="true" title="Добавить" />
          </div>
        </div>
        <div class="w-2/3">
          <div class="flex flex-row flex-wrap">
            <template v-for="(branch, i) in tree">
              <branch
                :key="branch.id"
                :branch="branch"
                :i="i"
                @open-title="e => changeTitle(i)"
                @open-answer="e => changeAnswer(i, e)"
                @change-type="e => changeType(e, i)"
                @change-current="e => changeCurrent(e, i)"
                @add-answer="addAnswer(branch)"
                @remove-answer="e => removeAnswer(e, branch)"
              />
            </template>
            <div
              key="new"
              class="w-1/2 mb-10"
              :class="tree.length % 2 === 0 ? 'pr-5' : 'pl-5'"
            >
              <div
                class="flex flex-col bg-transparent border items-center justify-center border-dashed border-C4 h-full rounded-30 px-10 py-8 w-full"
              >
                <v-button
                  class="w-full justify-center mb-4"
                  title="Приаязать шаблон"
                />
                <v-button
                  class="w-full justify-center"
                  title="Создать сообщение"
                  @click="addBranch()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputPopup from "~/components/inputPopup.vue"
export default {
  components: { inputPopup },
  data() {
    return {
      popup: false,
      current_template: 1,
      current_branch: null,
      current_answer: null,
      current_in_tree: null,
      popup_type: 0,
      templates: [
        {
          id: 1,
          title: "Основное меню"
        },
        {
          id: 2,
          title: "Контакты"
        },
        {
          id: 3,
          title: "Помощь"
        }
      ],
      tree: [
        {
          id: 1,
          title: "Сообщение",
          type: 0,
          current: undefined,
          answers: [
            {
              id: 1,
              title: "Рады приветствовать Вас eqweqweqweqweqweqw",
              branch: null
            },
            {
              id: "text",
              title: "",
              branch: null
            }
          ]
        }
      ],
      branch_template: {
        title: "Сообщение",
        type: 0,
        current: undefined,
        answers: [
          {
            id: 1,
            title: "Вариант ответа",
            branch: null
          },
          {
            id: "text",
            title: "",
            branch: null
          }
        ]
      }
    }
  },
  head() {
    return {
      title: "Конструктор диалогов"
    }
  },
  computed: {
    checkValue() {
      return this.current_answer
        ? this.current_answer.title
        : this.current_in_tree
        ? this.current_in_tree.title
        : ""
    }
  },
  methods: {
    changeTitle(branch_index) {
      this.popup = true
      this.popup_type = 0
      this.current_in_tree = this.tree[branch_index]
      this.current_branch = this.tree[branch_index]
    },
    changeAnswer(branch_index, index) {
      this.popup = true
      this.popup_type = 0
      this.current_in_tree = this.tree[branch_index]
      this.current_branch = this.tree[branch_index]
      this.current_answer = this.current_branch.answers[index]
    },
    changeType(type, i) {
      if (type === 2) this.changeCurrent("text", i)
      if (this.tree[i].type === 2) this.changeCurrent(undefined, i)
      this.tree[i].type = type
    },
    removeAnswer(index, branch) {
      if (branch.current === branch.answers[index].id)
        branch.current = undefined
      branch.answers.splice(index, 1)
    },
    addAnswer(branch, e) {
      this.popup = !this.popup
      if (branch) this.current_branch = branch
      if (!this.popup_type && e) {
        if (this.current_answer) {
          this.current_answer.title = e[0]
        } else {
          this.current_in_tree.title = e[0]
        }
      } else if (e) {
        for (let x of e)
          this.current_branch.answers.push({
            id:
              this.current_branch.answers.length > 1
                ? this.current_branch.answers.reduce((p, v) =>
                    parseInt(p.id) > parseInt(v.id) || isNaN(parseInt(v.id))
                      ? p
                      : v
                  ).id + 1
                : 1,
            title: x,
            branch: null
          })
      } else {
        this.current_branch = branch
      }
      this.popup_type = 1
      this.current_answer = null
      this.current_in_tree = null
    },
    changeCurrent(index, i) {
      this.tree[i].current = index
      this.tree.splice(i + 1, this.tree.length)
      let item = this.tree[i].answers[
        this.tree[i].answers.findIndex(x => x.id === this.tree[i].current)
      ]
      if (item && item.branch) this.addBranch(this.tree[i])
    },
    addBranch() {
      let me = this.tree[this.tree.length - 1]
      if (
        me &&
        me.current &&
        me.answers[me.answers.findIndex(x => x.id === me.current)].branch
      ) {
        me.answers[
          me.answers.findIndex(x => x.id === me.current)
        ].branch.current = undefined
        this.tree.push(
          me.answers[me.answers.findIndex(x => x.id === me.current)].branch
        )
      } else if (me.current !== undefined) {
        console.log(me.current)
        let template = JSON.parse(JSON.stringify(this.branch_template))
        template.id = me.id + "-" + me.current
        template.title += " " + template.id
        template.current = undefined
        if (this.tree.length)
          me.answers[
            me.answers.findIndex(x => x.id === me.current)
          ].branch = template
        this.tree.push(template)
      }
    }
  }
}
</script>

<style lang="scss">
.template {
  transition: 0.3s;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    transform: scaleY(0);
    width: 6px;
    transition: 0.3s;
    background-color: #008fa0;
    border-radius: 5px;
  }
  &.active {
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.1);
    &:before {
      transform: scaleY(1);
    }
  }
  &:hover {
  }
}
.type {
  transition: 0.3s;
  &.active {
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.2);
  }
}
</style>
