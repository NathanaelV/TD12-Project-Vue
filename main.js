const app = Vue.createApp ({
    data(){
        return{
            searchText: '',
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

    computed: {
        listResult(){

            // Verific se há um coteúdo em searchText
            if(this.searchText) {
                return this.contactList.filter(contact => {

                    // console.log(contact.firstName.toLoweCase)
                    return contact.firstName.toLowerCase().includes(this.searchText.toLowerCase());

                });
            } else {
                // Retorna todos os contatos
                return this.contactList;
            }
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

        removeContact(index) {
            // console.log('Index: ' + index)

            // Excluindo o objeto do index selecionado
            this.contactList.splice(index, 3);

        },

        async getData(){
            let response = await fetch('https://randomuser.me/api/?results=10');

            // Exibindo os dados no console do navegador
            // console.log(response.json());

            // Armazenando os dados do JSON
            let data = await response.json();

            // Limpar o Array
            this.contactList = [];

            // console.log(data);
            data.results.forEach(item =>{

                // Criar um objeto genérico
                var contact = new Object();

                contact.picture     = item.picture.large
                contact.firstName   = item.name.first;
                contact.lastName    = item.name.last;
                contact.email       = item.email;
                contact.city        = item.location.city;

                // Ver os objetos do contato no console
                // console.log('-----------------');
                // console.log(contact);

                // Adicionar objeto ao Array
                this.contactList.push(contact)
            });
        }
    }
})

app.mount('#app');
