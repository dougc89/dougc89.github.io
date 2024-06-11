const { createApp } = Vue
const { createVuetify } = Vuetify

import {ProjectCard} from '../components/project-card/script.js'

const vuetify3 = createVuetify()
const app = createApp({
    components: {
        ProjectCard
    },
    data: function(){
        return {
            message: "Hello to the World"
        }
    },
    mounted(){
        this.get_config()
    },
    methods:{
        async get_config(){
            let res = await fetch('config.json')
            console.log(1, res)
            let res_2 = await fetch('https://raw.githubusercontent.com/dougc89/dougc89.github.io/main/config.json')
            console.log(2, res_2)
        }

    }
})
app.use(vuetify3).mount('#app')