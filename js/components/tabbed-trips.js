app.component('TabbedTrips', {
    data(){
        return {

        }
    },

    props: {
      list: {
        type: Array,
        required: true,
      }
    },

    methods: {
      deleteIt: function(){
        this.tripList.pop(this.newTrip);
    }
    },

    computed: {
      
    },

    mounted(){

    },

    template: `
    <div class="container" id="userContainer">
    <ul class="nav nav-tabs nav-justified mb-3" id="tabs-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="tabs-my-trips-tab" data-toggle="tab" href="#tabs-my-trips" role="tab"
          aria-controls="tabs-my-trips" aria-selected="true">My Trips</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tabs-favorites-tab" data-toggle="tab" href="#tabs-favorites" role="tab"
          aria-controls="tabs-favorites" aria-selected="false">Favorites</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" id="pills-wishlist-tab" data-toggle="pill" href="#pills-wishlist" role="tab"
          aria-controls="pills-wishlist" aria-selected="false">Wishlist</a>
      </li> -->
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div class="tab-pane fade show active" id="tabs-my-trips" role="tabpanel" aria-labelledby="tabs-my-trips-tab">
        <div class="card-deck">
          <div v-for="(item, index) in list" v-bind:key="item.name" class="card">
            <img class="card-img-top"
              src="https://media.istockphoto.com/id/1128826884/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment.jpg?s=612x612&w=0&k=20&c=390e76zN_TJ7HZHJpnI7jNl7UBpO3UP7hpR2meE1Qd4="
              alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <div class="form-check">
                <input v-model="item.favorited" class="form-check-input" type="checkbox" value="" v-bind:id="'Favorite-' + index ">
                <label class="form-check-label" v-bind:for="'Favorite-' + index ">
                  Favorite {{item.name}} 
                </label>
              </div>
              <div class="form-check">
                <input v-model="item.completed" class="form-check-input" type="checkbox" value="" v-bind:id="'MyTrip-' + index ">
                <label class="form-check-label" v-bind:for="'MyTrip-' + index ">
                  Complete {{item.name}} 
                </label>
              </div>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#MyTripModalCenter">
                View your Trip
              </button>
              <button type="button" class="btn btn-secondary" v-on:click.prevent="deleteIt">
                Delete your Trip
              </button>
            </div> 
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tabs-favorites" role="tabpanel" aria-labelledby="tabs-favorites-tab">
        <div class="card-deck">
          <div v-for="(item, index) in list" v-bind:key="item.name" class="card">
            <img class="card-img-top"
              src="https://media.istockphoto.com/id/1128826884/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment.jpg?s=612x612&w=0&k=20&c=390e76zN_TJ7HZHJpnI7jNl7UBpO3UP7hpR2meE1Qd4="
              alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <div class="form-check">
                <input v-model="item.favorited" class="form-check-input" type="checkbox" value="" v-bind:id="'Favorite-' + index ">
                <label class="form-check-label" v-bind:for="'Favorite-' + index ">
                  Favorite {{item.name}} 
                </label>
              </div>
              <div class="form-check">
                <input v-model="item.completed" class="form-check-input" type="checkbox" value="" v-bind:id="'MyTrip-' + index ">
                <label class="form-check-label" v-bind:for="'MyTrip-' + index ">
                  Complete {{item.name}} 
                </label>
              </div>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#FavoriteModalCenter">
                Edit your Trip
              </button>
              <button type="button" class="btn btn-secondary" v-on:click.prevent="deleteIt">
                Delete your Trip
              </button>
            </div> 
          </div>
        </div>
      </div>
    </div> 
  </div>
    `
})