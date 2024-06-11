const { createApp } = Vue
const { createVuetify } = Vuetify
const vuetify3 = createVuetify()
const app = createApp({
    data: function(){
        return {
            message: "Hello to the World"
        }
    }
})
app.use(vuetify3).mount('#app')