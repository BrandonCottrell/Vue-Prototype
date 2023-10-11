app.component('LocationModal', {
    data() {
        return {

        }
    },

    props: {
        name: {
            type: String,
            default: 'Suggested Location',
        }
    },

    methods: {
        openModal()
        {
            state.modal_demo.show()
        },
        
        closeModal()
        {
            state.modal_demo.hide()
        }
    },

    computed: {

    },

    mounted() {

    },
    


    template: `

    <!-- Modal -->
    <div class="modal fade" id="LocationModalCenter" tabindex="-1" role="dialog" aria-labelledby="LocationModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <slot name="header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </slot>
        </div>
        <div class="modal-body">

        <div class="form-group">
                        <label for="tripName">Trip Name</label>
                        <input type="text" class="form-control" id="tripName" placeholder="Trip Name">
                      </div>

        <div class="row">
                            <div class="col">
                                <label for="StartDate">Trip Start Date</label>
                                <input type="date" class="" id="StartDate">
                            </div>
                            <div class="col">
                                <label for="EndDate">Trip End Date</label>
                                <input type="date" class="" id="EndDate">
                            </div>
                        </div>
          
            <form>
            <div class="form-group">
            <label for="numOfTravelers">How many people will be on your trip?</label>
            <input type="number" class="form-control" id="numOfTravelers">
        </div>
        <br>
        <label for="">Do you need a flight?</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flightRadio" id="flightRadio1">
            <label class="form-check-label" for="flightRadio1">
            Yes
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flightRadio" id="flightRadio2" checked>
            <label class="form-check-label" for="flightRadio2">
            No
            </label>
        </div>
        <br>
        <label for="">Do you need a rental car?</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="rentalRadio" id="rentalRadio1">
            <label class="form-check-label" for="rentalRadio1">
            Yes
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="rentalRadio" id="rentalRadio2" checked>
            <label class="form-check-label" for="rentalRadio2">
            No
            </label>
        </div>
        <br>
        <label for="">What activites are you interested in?</label>
        <div class="form-check">
            <input  class="form-check-input" type="checkbox" value="" id="CheckDefault1">
            <label class="form-check-label" for="CheckDefault1">
            Hiking
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="CheckDefault2">
            <label class="form-check-label" for="CheckDefault2">
            Day Trips
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="CheckDefault3">
            <label class="form-check-label" for="CheckDefault3">
            Local Food
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="CheckDefault4">
            <label class="form-check-label" for="CheckDefault4">
            Tours
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="CheckDefault5">
            <label class="form-check-label" for="CheckDefault5">
            Default checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="CheckDefault6">
            <label class="form-check-label" for="CheckDefault6">
            Explore Night Life
            </label>
        </div>
        <br>
        <div class="form-group">
            <label for="extraInformation">Extra Information</label>
            <textarea class="form-control" id="extraInformation" rows="3"></textarea>
        </div>
            </form>
              
        </div>
        <div class="modal-footer">
        <slot name="footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click.prevent="addIt">Save Trip</button>
        </slot>
        </div>
    </div>
    </div>
</div>
    `
})

// modal that i want to use
{/* <div class="modal fade" id="LocationModalCenter" tabindex="-1" role="dialog" aria-labelledby="LocationModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <label for="tripName">Trip Name</label>
                        <input v-model="newTrip.name" type="text" class="form-control" id="tripName" placeholder="Trip Name">
                      </div>
                        <div class="row">
                            <div class="col">
                                <label for="StartDate">Trip Start Date</label>
                                <input type="date" class="" id="StartDate">
                            </div>
                            <div class="col">
                                <label for="EndDate">Trip End Date</label>
                                <input type="date" class="" id="EndDate">
                            </div>
                        </div>
                          <br>
                          <form>
                            <div class="form-group">
                              <label for="numOfTravelers">How many people will be on your trip?</label>
                              <input v-model="newTrip.people" type="number" class="form-control" id="numOfTravelers">
                            </div>
                            <br>
                            <label for="">Do you need a flight?</label>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="flightRadio" id="flightRadio1">
                              <label class="form-check-label" for="flightRadio1">
                                Yes
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="flightRadio" id="flightRadio2" checked>
                              <label class="form-check-label" for="flightRadio2">
                                No
                              </label>
                            </div>
                            <br>
                            <label for="">Do you need a rental car?</label>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="rentalRadio" id="rentalRadio1">
                              <label class="form-check-label" for="rentalRadio1">
                                Yes
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="rentalRadio" id="rentalRadio2" checked>
                              <label class="form-check-label" for="rentalRadio2">
                                No
                              </label>
                            </div>
                            <br>
                            <label for="">What activites are you interested in?</label>
                            <div class="form-check">
                              <input  class="form-check-input" type="checkbox" value="" id="CheckDefault1">
                              <label class="form-check-label" for="CheckDefault1">
                                Hiking
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="CheckDefault2">
                              <label class="form-check-label" for="CheckDefault2">
                                Day Trips
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="CheckDefault3">
                              <label class="form-check-label" for="CheckDefault3">
                                Local Food
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="CheckDefault4">
                              <label class="form-check-label" for="CheckDefault4">
                                Tours
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="CheckDefault5">
                              <label class="form-check-label" for="CheckDefault5">
                                Default checkbox
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="CheckDefault6">
                              <label class="form-check-label" for="CheckDefault6">
                                Explore Night Life
                              </label>
                            </div>
                            <br>
                            <div class="form-group">
                              <label for="extraInformation">Extra Information</label>
                              <textarea class="form-control" id="extraInformation" rows="3"></textarea>
                            </div>
                          </form>
                          
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click.prevent="addIt">Save Trip</button>
                    </div>
                </div>
                </div>
            </div> */}