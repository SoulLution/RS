<template>
  <div class="pt-4 rounded-t-30 mt-15">
    <div class="px-70px flex flex-col">
      <h1 class="page-title text-cyan text-2xl font-bold">
        Все диалоги
      </h1>
      <div class="flex flex-col py-10 mt-22 bg-white rounded-30">
        <div class="flex flex-row justify-between w-full px-4">
          <div class="flex flex-row">
            <multiselect
              v-model="canal"
              class="rounded-5 p-3 bg-opacity-25 cursor-pointer relative z-10"
              style="min-height:50px; width: 200px; display: inline-table"
              :options="canals"
              :close-on-select="false"
              deselect-label="Канал не найден"
              placeholder="Фильтр каналов"
              :multiple="true"
              :taggable="true"
            ></multiselect>
            <multiselect
              v-model="tag"
              class="rounded-5 p-3 bg-opacity-25 cursor-pointer relative z-10"
              style="min-height:50px; width: 200px; display: inline-table"
              :options="tags"
              :close-on-select="false"
              deselect-label="Тэг не найден"
              placeholder="Фильтр тегов"
              :multiple="true"
              :taggable="true"
            ></multiselect>
          </div>
          <div class="relative flex items-center input">
            <svg
              class="absolute"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.15">
                <path
                  d="M6.1653 0C2.76585 0 0 2.76585 0 6.1653C0 9.56495 2.76585 12.3306 6.1653 12.3306C9.56495 12.3306 12.3306 9.56495 12.3306 6.1653C12.3306 2.76585 9.56495 0 6.1653 0ZM6.1653 11.1924C3.39339 11.1924 1.13821 8.93725 1.13821 6.16533C1.13821 3.39341 3.39339 1.13821 6.1653 1.13821C8.93722 1.13821 11.1924 3.39339 11.1924 6.1653C11.1924 8.93722 8.93722 11.1924 6.1653 11.1924Z"
                  fill="black"
                />
                <path
                  d="M13.834 13.0283L10.5711 9.76538C10.3488 9.54305 9.98869 9.54305 9.76636 9.76538C9.54403 9.98752 9.54403 10.348 9.76636 10.5701L13.0292 13.833C13.1404 13.9441 13.2859 13.9997 13.4316 13.9997C13.5771 13.9997 13.7228 13.9441 13.834 13.833C14.0563 13.6108 14.0563 13.2504 13.834 13.0283Z"
                  fill="black"
                />
              </g>
            </svg>
            <input
              class="bg-C4 bg-opacity-10 mr-24 rounded-full pl-15 pr-8 py-6 outline-none w-full"
              type="text"
              placeholder="Поиск ..."
            />
          </div>
        </div>
        <table class="mt-4">
          <thead>
            <tr>
              <td><div>Последний оператор и канал</div></td>
              <td><div>Клиент</div></td>
              <td><div>Телефон и мессенджер</div></td>
              <td><div>Последнее сообщение</div></td>
              <td><div>Теги клиента</div></td>
              <td><div class="sort">Последнее сообщение</div></td>
              <td><div class="sort">Первое сообщение</div></td>
              <!-- <td><div>Вложение</div></td> -->
              <td></td>
            </tr>
          </thead>
          <tbody>
            <template v-for="user in users">
              <tr :key="user.id">
                <td>
                  <div>{{ user.operator }}</div>
                </td>
                <td style="max-width: 125px">
                  <div class="flex flex-row">
                    <svg
                      width="27"
                      viewBox="0 0 27 27"
                      class="fill-current text-cyan"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0646 14.1059C20.6561 12.6164 21.6581 10.5042 21.6581 8.15729C21.6581 3.65954 17.9985 0 13.5008 0C9.00305 0 5.34351 3.65954 5.34351 8.15729C5.34351 10.5042 6.34544 12.616 7.93658 14.1059C5.48175 16.2178 2.14648 19.116 2.14648 25.8049V27H24.8539V25.8049C24.8543 19.1164 21.5194 16.2178 19.0646 14.1059ZM7.7338 8.15769C7.7338 4.97779 10.3209 2.3907 13.5008 2.3907C16.6803 2.3907 19.2678 4.97779 19.2678 8.15769C19.2678 11.3376 16.6807 13.9251 13.5008 13.9251C10.3209 13.9247 7.7338 11.3376 7.7338 8.15769ZM4.57941 24.6097C4.92799 19.8462 7.36211 17.7523 9.52892 15.8887C9.59186 15.8341 9.65441 15.7807 9.71695 15.727C10.9037 16.2357 12.1961 16.5074 13.51 16.5174C14.8083 16.5074 16.0975 16.2357 17.2842 15.727C17.346 15.7807 17.4089 15.8345 17.4723 15.8887C19.6387 17.7523 22.0732 19.8462 22.4218 24.6097H4.57941Z"
                      />
                    </svg>

                    <span class="truncate" :title="user.fio">{{
                      user.fio
                    }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center">
                    <img :src="user.messanger + '.svg'" />
                  </div>
                </td>
                <td style="max-width: 250px">
                  <div class="truncate pr-4" :title="user.message">
                    {{ user.message }}
                  </div>
                </td>
                <td>
                  <div>
                    <span v-for="(tag, i) in user.tags" :key="i">{{
                      tag + (i === user.tags.length - 1 ? "" : ", ")
                    }}</span>
                  </div>
                </td>
                <td>
                  <div>
                    {{ $moment(user.end).format(checkFormat(user.end)) }}
                  </div>
                </td>
                <td>
                  <div>
                    {{ $moment(user.first).format(checkFormat(user.first)) }}
                  </div>
                </td>
                <!-- <td>
                  <div>{{ user.files }}</div>
                </td> -->
                <td class="flex justify-end">
                  <v-button
                    class="whitespace-no-wrap mr-2"
                    title="Открыть чат"
                    @click="
                      $router.push({
                        path: '/chat',
                        query: { user_id: user.id }
                      })
                    "
                  />
                  <v-button
                    class="whitespace-no-wrap ml-2"
                    title="Назначить на .."
                  />
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="9">
                <pagination v-model="current_page" :max="10" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <bottom-popup
      v-if="popup"
      :childs="popup_content"
      :title="
        popup_content[0].value ? 'Изменить' : 'Добавить нового сотрудника'
      "
      :button="popup_content[0].value ? 'Сохранить' : 'Добавить'"
      @close="popup = false"
    />
  </div>
</template>

<script>
import vInput from "@/components/vInputBottom"
import vSelect from "@/components/vSelect"
export default {
  data() {
    return {
      current_page: 1,
      tag: [],
      tags: ["12323132132321", 321, 412, 421, 32],
      canal: [],
      canals: ["1канал", "2канал", "3канал"],
      users: [
        {
          id: 1,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "tg",
          message: "12123211212321121232112123211212321121232112123211212321",
          tags: ["Тэг"],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        },
        {
          id: 2,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "wp",
          message: "1212321121232112123211212321",
          tags: [],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        },
        {
          id: 3,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "wp",
          message: "1212321121232112123211212321",
          tags: [],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        },
        {
          id: 4,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "wp",
          message: "1212321121232112123211212321",
          tags: [],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        },
        {
          id: 5,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "wp",
          message: "1212321121232112123211212321",
          tags: [],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        },
        {
          id: 6,
          operator: "Айгерим Алетова",
          fio: "Потапов Даниил",
          messanger: "wp",
          message: "1212321121232112123211212321",
          tags: [],
          files: [],
          first: new Date(new Date().setDate(new Date().getDate() - 2)),
          end: new Date(new Date().setHours(10, 10, 10))
        }
      ],
      popup: false,
      popup_content: [
        {
          title: "Ф.И.О.",
          component: vInput,
          value: "",
          placeholder: "Введите ФИО сотрудника"
        },
        {
          title: "Должность",
          component: vSelect,
          value: "Менеджер",
          childs: ["Менеджер", "Администратор"]
        },
        {
          title: "Пароль",
          component: vInput,
          type: "password",
          value: "",
          placeholder: "Введите пароль"
        },
        {},
        {
          title: "Номер телефона",
          component: vInput,
          value: "",
          type: "phone",
          placeholder: "Введите номер"
        },
        {
          title: "E-mail",
          component: vInput,
          type: "email",
          value: "",
          placeholder: "Введите email"
        }
      ]
    }
  },
  methods: {
    checkFormat(date) {
      return this.$moment(date).format("YY.MM.DD") !==
        this.$moment(new Date()).format("YY.MM.DD")
        ? "DD.MM.YY hh:mm"
        : "hh:mm"
    },
    changeUser(user) {
      this.popup = true
      console.log(user)
    }
  }
}
</script>

<style lang="scss" scoped>
.absolute {
  left: 36px;
}
.input {
  width: 100%;
  max-width: 550px;
}
table {
  border-collapse: separate;
  border-spacing: 0;
  & thead {
    border-bottom: 1px solid #00000015;
    color: #828282;
    & td {
      border-left: 1px solid #00000015;
      &:first-child {
        border-left: 0;
      }
      & > div {
        position: relative;
        display: flex;
        &.sort {
          color: #008fa0;
          &:after {
            content: "";
            display: block;
            left: 20px;
            transform: translateY(8px);
            margin-left: 0.75rem;
            max-width: 12px;
            max-height: 7px;
            min-width: 12px;
            min-height: 7px;
            background-image: url("/down_cyan.png");
            background-repeat: no-repeat;
            background-position: 0 0;
          }
        }
      }
    }
  }
  & td {
    padding-top: 24px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid #00000015;
  }
}
</style>
<style lang="scss">
.multiselect__select {
  top: 11px;
  right: 4px;
}
.multiselect__tags,
.multiselect__input {
  background: #c4c4c410;
  border-radius: 5px;
}
.multiselect__input {
  background: transparent;
}
</style>
