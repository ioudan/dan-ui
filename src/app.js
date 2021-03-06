import Vue from 'vue';
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'

Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-icon', Icon)
Vue.component('d-input', Input)

new Vue({
    el: "#app",
    data: function () {
        return {
            loading1: false,
            loading2: false,
            loading3: false,
            message:'hi'
        }
    },
    methods:{
        inputChange(){
            console.log(1);
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
try{
    // 单元测试 按钮里含有icon
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        })
        vm.$mount()  // 挂载到内存里
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
// 单元测试 2
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings',
                loading: true,
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
// 单元测试 3
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
// 单元测试 4
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings',
                iconPosition:'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
// 单元测试 5
    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function(){})

        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()

    }
}catch (error){
    window.errors = [error]
} finally {
    window.errors && window.errors.map((error)=>{
            console.log(error.message);
    })
}