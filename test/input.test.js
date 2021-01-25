const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('可以接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '12345'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('12345')
        })
        it('可以接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('可以接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                // 构造一个Input组件
                vm = new Constructor({}).$mount()
                // 伪造一个回调函数
                const callback = sinon.fake() // 调用西蒙 伪造 一个回调函数
                // 监听组件的各种事件，当事件触发时，执行回调函数
                vm.$on(eventName, callback)
                // 获取组件内的input对象
                const element = vm.$el.querySelector('input')
                // 构造一个Event事件
                const event = new Event(eventName);

                // javascript中模拟input事件时，设置target属性
                // event是一个只读属性，没法event.target来设置，只能如下
                Object.defineProperty(
                    event, 'target',
                    {value: 'hi', enumerable: true});

                // input对象调用这个事件
                //      由于每个事件都绑定一个$emit('xxx',$event.target.value)
                //      会将触发事件的对象的value值，传给被触发的组件的xxx函数
                    element.dispatchEvent(event);
                // 期待回调函数被调用时，传的参数是event
                expect(callback).to.have.been.calledWith(event.target.value)
            })
        })

    })


})