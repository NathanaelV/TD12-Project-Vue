const app = Vue.createApp ({
    data(){
        return{
            firstName: 'Casey',
            lastName: 'Jones',
            email: 'casey.jones@email.com',
            city: 'New York City',
            picture: 'https://randomuser.me/api/portraits/men/57.jpg',

            contactList: [
                {
                    firstName:  'Casey',
                    lastName:   'Jones',
                    email:      'casey.jones@email.com',
                    city:       'New York City',
                    picture:    'https://randomuser.me/api/portraits/men/36.jpg'
                },
                {
                    firstName:  'April',
                    lastName:   "O'Neil",
                    email:      'april.o.neil@email.com',
                    city:       'New York City',
                    picture:    'https://randomuser.me/api/portraits/women/10.jpg'
                },
                {
                    firstName:  'Lois',
                    lastName:   'Lane',
                    email:      'lois.lane@email.com',
                    city:       'Metrópolis',
                    picture:    'https://randomuser.me/api/portraits/women/57.jpg'
                }
            ]
        }
    },
    methods: {
        changeData(){
            this.firstName = 'Phoenix',
            this.lastName  = 'Ikki',
            this.email     = 'phoenix.ikki@saint.com'
            this.city      = 'Athens'
            this.picture   = 'https://randomuser.me/api/portraits/men/52.jpg'
        },
        async getData(){
            let response = await fetch('https://randomuser.me/api/?results=10');

            // Exibindo os dados no console do navegador
            // console.log(response.json());

            // Armazenando os dados do JSON
            let data = await response.json();

            console.log(data);
        }
    }
})

app.mount('#app');
