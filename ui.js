import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
const vuetify3 = createVuetify()
const app = createApp({
    data: function(){
        return {
            message: "Hello to the World"
        }
    }
})
app.use(vuetify3).mount('#app')