const { createApp } = Vue
const { createVuetify } = Vuetify

import {ProjectCard} from '../components/project-card/script.js'
import {SkillsDrawer} from '../components/skills-drawer/script.js'

const vuetify3 = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})

const app = createApp({
    components: {
        ProjectCard,
        SkillsDrawer,
    },
    data: function(){
        return {
            message: "Hello to the World",
            projects: null,
            skills_map: {},
            skills_list: [],
            selected_skills: [],
        }
    },
    computed: {
        filtered_projects(){
            if(this.selected_skills.length){
                // remove any projects that do not include the skills we are filtering for
                return this.projects.filter(project => this.selected_skills.every(skill => project.skills.includes(skill)))
            }else{
                return this.projects
            }
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
            this.projects = this.projects.sort( (a,b) => { return b.date.localeCompare(a.date) })

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
            this.skills_list = Object.keys(this.skills_map).sort()

        },
        update_skills(skills){
            console.log('gotcha bro', skills)
            this.selected_skills = skills
        },
        reset_skills(){
            this.selected_skills = []
        },

    }
})
app.use(vuetify3).mount('#app')