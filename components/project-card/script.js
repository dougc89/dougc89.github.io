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
        }
    }
}