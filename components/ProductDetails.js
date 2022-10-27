app.component('product-detail', {
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    
   `
   <div>
    <ul>
        <li v-for="(detail, index) in details" :key="index"> {{detail}}</li>
    </ul>
   </div>
   `
  })