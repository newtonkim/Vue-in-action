    const app = Vue.createApp({

        data() {
            return {
                Product: 'Socks',
                image: './assets/images/socks_green.jpg',
                // inStock: true
                inventory: 10,
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, color: 'green' },
                    {id: 2235, color: 'blue'}
                ],
                sizes: ['size 4', 'size 3',' size 5', 'size 6']
            }
        }
    }).mount('#app')