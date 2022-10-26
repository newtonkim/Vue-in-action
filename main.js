    const app = Vue.createApp({

        data() {
            return {
                Product: 'Socks',
                image: './assets/images/socks_green.jpg',
                // inStock: true
                inventory: 10,
                onSale: true
            }
        }
    }).mount('#app')