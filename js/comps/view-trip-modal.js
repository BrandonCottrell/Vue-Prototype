app.component('ViewTripModal', {
    data(){
        return {
            editTrip: {
                ...this.modelValue
            },
            uid: 'eim-' + Math.floor(Math.random() * 10e16),
        }
    },
    props: {
        // it has to be named 'modelValue' to work with v-model outside the component
        modelValue: {
            type: Object,
            required: true,
        }
    },
    // has to be named 'update:modelValue' to work with v-model
    emits: ['update:modelValue'],
    methods: {
        editIt: function () {
            // this doesn't work because we are getting item as a prop from shopping-list-item
            //this.$emit('update:modelValue', this.editItem);

            // put new values from editItem back into modelValue
            Object.assign(this.modelValue, this.editTrip);
        },
    },
    template : `
    <div class="modal fade" id="viewTripModal" tabindex="-1" role="dialog" aria-labelledby="viewTripModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <slot name="header">
                <h5 class="modal-title" id="viewTripModalLabel">Completed Trip</h5>
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
                    <input v-model="modelValue.name" type="text" class="form-control" id="NameOfTrip" placeholder="Trip Name..." disabled>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label for="start">Start date: </label>
                            <input v-model="modelValue.startDate" type="date" class="form-control" id="start" name="trip-start" min="2023-11-01" max="2100-12-31"  disabled>
                        </div>
                        <div class="col">
                            <label for="start">End date: </label>
                            <input v-model="modelValue.endDate" type="date" class="form-control" id="end" name="trip-end" min="2023-11-01" max="2100-12-31"  disabled>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="tripPrice">Trip Price</label>
                        <select v-model="modelValue.price" id="tripPrice" class="form-control" disabled>
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
            </slot>
        </div>
      </div>
    </div>
</div>
    `
})





