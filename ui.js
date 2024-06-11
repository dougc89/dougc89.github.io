const { createApp } = Vue
const { createVuetify } = Vuetify

import project_card from '../components/project-card/script.js'
// const ProjectCard = {
//     template: '#project-card-template',
//     props:{
//         project: {
//             default: null
//         }
//     },
//     data(){
//         return {

//         }
//     },
//     computed: {
//         title(){
//             return this.project ? `${this.project.title}` :  'Title goes here...'
//         },
//         subtitle(){
//             return this.project ? `${this.project.date}` :  'Month of completion goes here...'    
//         }
//     }
// }

const vuetify3 = createVuetify()
const app = createApp({
    components: {
        ProjectCard
    },
    data: function(){
        return {
            message: "Hello to the World"
        }
    }
})
app.use(vuetify3).mount('#app')