import { Aside, Button, Checkbox, Container, Form, FormItem, Input, Main, Menu, MenuItem, Submenu } from "element-ui"

const element = {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(Checkbox)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(Container)
        Vue.use(Aside)
        Vue.use(Main)
    }
}

export default element