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

            // sort the projects by date completed (newest first)
            this.projects = this.projects.sort( (a,b) => { return a.date.localeCompare(b.date) })

            // count the projects where I have used each skill
            for( const project of this.projects){
                for( const skill of project.skills){
                    if(!this.skills_map[skill]) {
                        // init the count
                        this.skills_map[skill] = 1
                    }else{
                        // increment the count
                        this.skills_map[skill] += 1
                    }
                }
            }

            // organize all skills keys into an array, then sort them alphabetically
            this.skills_list = Object.keys(this.skills).sort()

        }

    }
})
app.use(vuetify3).mount('#app')