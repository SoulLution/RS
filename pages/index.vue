<template>
  <div>
    <div class="photo">
      <div class="content flex flex-col pt-24 pb-20">
        <div>
          <div class="inline-flex flex-row mb-7 rounded-10 bg-white w-auto">
            <div class="w-auto border-r border-black border-opacity-10">
              <v-select
                v-model="type"
                class="py-7 px-9"
                name="value"
                :childs="types"
              />
            </div>
            <div class="w-auto border-r border-black border-opacity-10">
              <v-select
                v-model="build"
                class="py-7 px-9"
                name="value"
                :childs="builds"
              />
            </div>
            <div class="w-auto border-r border-black border-opacity-10">
              <v-select
                v-model="city"
                class="py-7 px-9"
                name="value"
                :childs="cityes"
              />
            </div>
            <div class="w-auto">
              <v-select
                v-model="district"
                class="py-7 px-9"
                name="value"
                :childs="districts"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="inline-flex flex-row mb-7 rounded-10 bg-white w-auto">
            <div class="w-auto border-r border-black border-opacity-10">
              <v-select
                v-model="room"
                class="py-7 px-9"
                name="value"
                :childs="rooms"
              />
            </div>
            <div
              class="flex flex-row items-center w-auto border-r py-7 px-9 border-black border-opacity-10"
            >
              <span>Цена</span>
              <input
                v-model="price[0]"
                v-mask="'#########'"
                class="px-2 py-2 bg-F3 rounded-5 ml-4 mr-2"
                style="width: 150px"
                type="text"
              />
              <span>-</span>
              <input
                v-model="price[1]"
                v-mask="'#########'"
                class="px-2 py-2 bg-F3 rounded-5 ml-2 mr-8"
                style="width: 150px"
                type="text"
              />
              <vue-slider
                v-model="price"
                :tooltip="'active'"
                class="mr-20"
                :tooltip-placement="['top', 'bottom']"
                width="300px"
                dot-size="16"
                :min="0"
                :max="100000000"
                :interval="1000000"
                :tooltip-formatter="formatter"
              />
              <div class="flex flex-row items-center">
                <v-check-box />
                <span class="ml-2 truncate">Есть фото</span>
              </div>
            </div>
            <div class="w-auto">
              <v-select
                v-model="from"
                class="py-7 px-9"
                name="value"
                :childs="froms"
              />
            </div>
          </div>
        </div>
        <div class="mb-7">
          <span
            class="border-b inline-block w-auto pb-1 border-dashed border-white border-opacity-75 text-white text-opacity-75 cursor-pointer relative"
          >
            Развернуть фильтры
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              class="absolute right-0 top-0"
              xmlns="http://www.w3.org/2000/svg"
              style="transform: translate(16px, 8px)"
            >
              <path
                opacity="0.7"
                d="M5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.3033 1.75736C11.5962 1.46447 11.5962 0.989593 11.3033 0.696699C11.0104 0.403806 10.5355 0.403806 10.2426 0.696699L6 4.93934L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989592 0.403806 1.46447 0.696699 1.75736L5.46967 6.53033ZM5.25 5L5.25 6L6.75 6L6.75 5L5.25 5Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div class="flex flex-row justify-start">
          <button
            class="rounded-10 font-bold py-4 px-7 bg-white border border-white mr-5 hover:bg-opacity-75"
            style="color: #494949"
          >
            Показать на карте
          </button>
          <button
            class="rounded-10 font-bold py-4 px-15 bg-red text-white border border-red hover:bg-transparent"
          >
            Найти
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col hot content">
      <hot :list="products" />
    </div>
    <div class="flex flex-col blog content">
      <blog :list="blogs" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 2,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 3,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 4,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 5,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 6,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 7,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        },
        {
          id: 8,
          img: "/default_room.png",
          title: "1-комнатная квартира 43 м2",
          district: "Алмалинский р-н",
          price: "7 343 560"
        }
      ],
      blogs: [
        {
          id: 1,
          html: `Недвижимость остается наиболее выгодном активом для сохранения средств. Однако пандемия, длительный карантин, скачки курса валют и дешевая ипотека Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt veritatis molestias hic labore nulla ipsum repellendus, accusantium vel impedit? Quidem asperiores, libero excepturi illum saepe autem consequuntur unde magnam!`,
          title: "Почему стоит вкладывать в недвижимость?",
          img: "/default_blog.png",
          author: "Виталий Ревякин"
        },
        {
          id: 2,
          html: `Недвижимость остается наиболее выгодном активом для сохранения средств. Однако пандемия, длительный карантин, скачки курса валют и дешевая ипотека Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt veritatis molestias hic labore nulla ipsum repellendus, accusantium vel impedit? Quidem asperiores, libero excepturi illum saepe autem consequuntur unde magnam!`,
          title: "Почему стоит вкладывать в недвижимость?",
          img: "/default_blog.png",
          author: "Виталий Ревякин"
        },
        {
          id: 3,
          html: `Недвижимость остается наиболее выгодном активом для сохранения средств. Однако пандемия, длительный карантин, скачки курса валют и дешевая ипотека Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt veritatis molestias hic labore nulla ipsum repellendus, accusantium vel impedit? Quidem asperiores, libero excepturi illum saepe autem consequuntur unde magnam!`,
          title: "Почему стоит вкладывать в недвижимость?",
          img: "/default_blog.png",
          author: "Виталий Ревякин"
        },
        {
          id: 4,
          html: `Недвижимость остается наиболее выгодном активом для сохранения средств. Однако пандемия, длительный карантин, скачки курса валют и дешевая ипотека Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt veritatis molestias hic labore nulla ipsum repellendus, accusantium vel impedit? Quidem asperiores, libero excepturi illum saepe autem consequuntur unde magnam!`,
          title: "Почему стоит вкладывать в недвижимость?",
          img: "/default_blog.png",
          author: "Виталий Ревякин"
        }
      ],
      type: {
        id: 1,
        value: "Продажа"
      },
      types: [
        {
          id: 1,
          value: "Продажа"
        },
        {
          id: 2,
          value: "Аренда"
        }
      ],
      build: {
        id: 1,
        value: "Квартиру"
      },
      builds: [
        {
          id: 1,
          value: "Квартиру"
        },
        {
          id: 2,
          value: "Дом"
        }
      ],
      city: {
        id: 1,
        value: "Алматы"
      },
      cityes: [
        {
          id: 1,
          value: "Алматы"
        },
        {
          id: 2,
          value: "Нур-Султан"
        }
      ],
      district: {
        id: 1,
        value: "Алмалинский р-н"
      },
      districts: [
        {
          id: 1,
          value: "Алмалинский р-н"
        },
        {
          id: 2,
          value: "Жетысуский р-н"
        }
      ],
      room: {
        id: 1,
        value: "1-комнатную"
      },
      rooms: [
        {
          id: 1,
          value: "1-комнатную"
        },
        {
          id: 2,
          value: "2-комнатную"
        }
      ],
      from: {
        id: 1,
        value: "от агенств"
      },
      froms: [
        {
          id: 1,
          value: "от агенств"
        },
        {
          id: 2,
          value: "от хозяев"
        }
      ],
      price: ["", ""],
      formatter: v => `${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
    }
  }
}
</script>

<style lang="scss" scoped>
.hot {
  max-width: calc(1400px + 1rem);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.blog {
  max-width: calc(1424px + 0.5rem);
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.photo {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/index_city.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 0 100%;
  // background-size: 100% 100%;
}
</style>
