const app = Vue.createApp ({
    data(){
        return{
            firstName: 'Casey',
            lastName: 'Jones',
            email: 'casey.jones@email.com',
            city: 'New York City',
            picture: 'https://randomuser.me/api/portraits/men/57.jpg'
        }
    }
})

app.mount('#app');
