const project_card = {
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
            return this.project ? `${this.project.date}` :  'Month of completion goes here...'    
        }
    }
}
export default project_card