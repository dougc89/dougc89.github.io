export const SkillsDrawer = {
    template: '#skills-drawer-template',
    name:'SkillsDrawer',
    props:{
        skills_list: {
            default: () => []
        },
        skills_map: {
            default: () => {return {}}
        },
        modelValue: {
            // models selected_skills
            default: () => []        
        }
    },
    data(){
        return {
            color: 'teal',
            width: '300',
        }
    },
    computed: {
    },
    methods: {
        input_handler(val){
            console.log('modelling', val)
            this.$emit('update:model-value', val)
        }
    }
}