export const ProjectCard = {
    template: '#project-card-template',
    props:{
        project: {
            default: null
        }
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
            return this.project ? `${this.project.date}: ${this.project.job_title} @ ${this.project.employer}` :  'Month of completion goes here...'    
        }
    }
}
// export default project_card