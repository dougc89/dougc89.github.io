const { createApp } = Vue
const { createVuetify } = Vuetify

import {ProjectCard} from '../components/project-card/script.js'

const vuetify3 = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})

const app = createApp({
    components: {
        ProjectCard
    },
    data: function(){
        return {
            message: "Hello to the World",
            projects: null,
            skills_map: {},
            skills_list: [],
        }
    },
    mounted(){
        this.get_projects()
    },
    methods:{
        async get_projects(){
            // read the project list
            let res = await fetch('projects.json')
            this.projects= await res.json()

            // count the projects where I have used each skill
            this.all_skills 

            // // organize all skills into a list of lists, then flatten into a 1D array
            // let all_skills = this.projects.map( project => project.skills ).flat()

            // // remove duplicates with set conversion
            // this.skills = [... new Set(all_skills)]

        }

    }
})
app.use(vuetify3).mount('#app')