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
            nav_icon: "mdi-format-list-checkbox",
            show_drawer: true,
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

        // set the default show draw to false on a smaller screen
        if(window.innerWidth < 1200) this.show_drawer = false
    },
    methods:{
        async get_projects(){
            // read the project list
            let res = await fetch('projects.json')
            this.projects= await res.json()

            // sort the projects by date completed (newest first, with favorites at the top)
            this.projects = this.projects.sort( (a,b) => { 
                if(a.favorite || b.favorite) return a.favorite ? -1 : 1
                return b.date.localeCompare(a.date) 
            })

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

            // organize all skills keys into an array, then sort them by the most commonly used in my projects
            this.skills_list = Object.keys(this.skills_map).sort((a,b) => this.skills_map[b] - this.skills_map[a])

        },
        update_skills(skills){
            this.selected_skills = skills
        },
        reset_skills(){
            this.selected_skills = []
        },
        toggle_drawer(state){
            this.show_drawer = state
        }

    }
})
app.use(vuetify3).mount('#app')