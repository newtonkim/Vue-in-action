const app = Vue.createApp({

    data() {
        return {
            cart:0,
            onSale:true,
            product: 'Socks',
            brand: ' Vue Mastery',
            selecedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',  quantity: 0},
            ]
        }
    }, 
    methods: {
        addToCart() {
            this.cart += 1;
        },

        updateVariant(index) {
            this.selecedVariant = index
        },

        removeFromCart() {
            this.cart -= 1;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },

        image() {
            return this.variants[this.selecedVariant].image;
        },

        inStock() {
            return this.variants[this.selecedVariant].quantity;
        },

        theSale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' '+ 'is on sale';
            }
        }


    }
}).mount('#app')
