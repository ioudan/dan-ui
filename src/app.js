import Vue from 'vue';
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-icon', Icon)

new Vue({
    el: "#app",
    data: function () {
        return {
            loading1: false,
            loading2: false,
            loading3: false
        }
    }
})