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
            message: "Hello to the World",
            config: null,
        }
    },
    mounted(){
        this.get_config()
    },
    methods:{
        async get_config(){
            let res = await fetch('config.json')
            console.log(1, res)
            this.config = await res.json()
            console.log(this.config)
        }

    }
})
app.use(vuetify3).mount('#app')