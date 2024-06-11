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
            console.log('1.json', res.json())
        }

    }
})
app.use(vuetify3).mount('#app')