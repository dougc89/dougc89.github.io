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
            skills: [],
        }
    },
    mounted(){
        this.get_config()
    },
    methods:{
        async get_config(){
            // read the project list
            let res = await fetch('config.json')
            this.config = await res.json()

            // organize all skills into a list of lists, then flatten into a 1D array
            this.skills = this.config.projects.map( project => project.skills ).flat()
            console.log(this.skills)

            // remove duplicates with set conversion
            this.skills = [... new Set(this.skills)]
            console.log(this.skills)

        }

    }
})
app.use(vuetify3).mount('#app')