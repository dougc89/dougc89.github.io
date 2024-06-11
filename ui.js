const vuetify3 = Vuetify()
const app = Vue({
    data: function(){
        return {
            message: "Hello to the World"
        }
    }
})
app.use(vuetify3).mount('#app')