export const SkillsDrawer = {
    template: '#skills-drawer-template',
    props:{
        skills_list: {
            default: () => []
        },
        skills_map: {
            default: () => {return {}}
        },
        selected_skills: {
            default: () => []        
        }
    },
    data(){
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}