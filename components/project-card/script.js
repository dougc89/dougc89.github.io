export const ProjectCard = {
    template: '#project-card-template',
    name: 'ProjectCard',
    props:{
        project: {
            default: null
        },
        selected_skills: {
            default: ()=>[]
        },
    },
    data(){
        return {

        }
    },
    computed: {
        title(){
            return this.project ? `${this.project.title}` :  'Title goes here...'
        },
        subtitle(){
            return this.project ? `${this.format_date(this.project.date)}: ${this.project.job_title} @ ${this.project.employer}` :  'Month of completion goes here...'    
        }
    },
    methods: {
        format_date(datestring){
            let months = {
                '01':'Jan', '02':'Feb', '03':'Mar', '04':'Apr', '05':'May', '06':'Jun', 
                '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct', '11':'Nov', '12':'Dec'
            }
            let date = datestring.split('-')
            return `${months[date[1]]} ${date[0]}`
        },
        toggle_skill(skill){

            if(this.selected_skills.includes(skill)){
                console.log("toggle off, because it is on", skill)
                let new_skills = [...this.selected_skills]
                new_skills.splice(new_skills.indexOf(skill), 1)
                console.log('new skills', new_skills)
                this.$emit('update:skills', new_skills)
            }else{
                let new_skills = [...this.selected_skills]
                new_skills.push(skill)
                console.log('new skills', new_skills)
                console.log("toggle on, because it is off", skill)
                this.$emit('update:skills', new_skills)
            }

        }
    }
}