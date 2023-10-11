app.component('LocationCard', {
    data(){
        return {

        }
    },

    props: {
      name: {
        type: String,
        default: 'Suggested Trip',
      },
      photo: {
        type: String,
        default: 'Suggested Photo',
      }
    },

    methods: {
      
    },

    computed: {
      
    },

    mounted(){

    },

    template: `
    <div class="card">
    <img class="card-img-top" src= https://static6.depositphotos.com/1160567/648/i/450/depositphotos_6482528-stock-photo-travel-destination.jpg>
        <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                Favorite {{name}}  
                </label>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#LocationModalCenter">
                Plan your {{name}} Trip
            </button>
        </div>
    </div>
    `
})