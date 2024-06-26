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
        },
        show_drawer: {
            type: Boolean,
            default: true
        },
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
            this.$emit('update:model-value', val)
        },
        toggle_drawer(state){
            this.$emit('toggle_drawer', state)
        },
    }
}