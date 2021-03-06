import Vue from "vue"
import { TwemojiPicker } from "@kevinfaguiar/vue-twemoji-picker"
Vue.component("TwemojiPicker", TwemojiPicker)

import { VueMaskDirective } from "v-mask"
Vue.directive("mask", VueMaskDirective)

import Multiselect from "vue-multiselect"
Vue.component("Multiselect", Multiselect)

import DatePick from "vue-date-pick"
Vue.component("DatePick", DatePick)
// import "vue-date-pick/dist/vueDatePick.css"

import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

Vue.component("VueSlider", VueSlider)
