app.component('AddTripModal', {
    props: {
        title: {
            type: String,
            default: 'Modal Title',
        },
        id: {
            type: String,
            required: true,
        }
    },
    template : `
    <div class="modal fade" id="newTripModal" tabindex="-1" role="dialog" aria-labelledby="newTripModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
            <slot name="header">
                <h5 class="modal-title" id="newTripModalLabel">New Trip</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
              </slot>   
            </div>
            <div class="modal-body">
                <slot>
                <form>
                    <div class="form-group">
                      <label for="nameOfTrip">Name of Trip</label>
                      <input v-model="newTrip.name" type="text" class="form-control" id="nameOfTrip" placeholder="Trip Name...">
                    </div>

                    <div class="row">
                        <div class="col">
                            <label for="start">Start date: </label>
                            <input v-model="newTrip.startDate" type="date" class="form-control" id="start" name="trip-start" min="2023-11-01" max="2100-12-31" />
                        </div>
                        <div class="col">
                            <label for="start">End date: </label>
                            <input v-model="newTrip.endDate" type="date" class="form-control" id="end" name="trip-end" min="2023-11-01" max="2100-12-31" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="tripPrice">Trip Price</label>
                        <select v-model="newTrip.price" id="tripPrice" class="form-control">
                          <option selected> </option>
                          <option>$</option>
                          <option>$$</option>
                          <option>$$$</option>
                        </select>
                    </div>

                </form>
                </slot>
            </div>
            <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click.prevent="addIt">Add New Trip</button>
              </slot>
            </div>
          </div>
        </div>
    </div>
    `
})