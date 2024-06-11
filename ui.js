const { createApp } = Vue
const { createVuetify } = Vuetify

const app = createApp({
    el: '#app',
    vuetify: createVuetify(),
    data: function(){
        return {
            message: "Hello to the World"
        }
    }
})
// app.use(vuetify3).mount('#app')