app.component('SignupModal', {
    data(){
        return {

        }
    },

    props: {
      title: {
        type: String,
        default: 'modal Title',
      },
      id: {
        type: String,
        required: true,
      }
    },

    methods: {
      
    },

    computed: {
      
    },

    mounted(){

    },

    template: `
    <div class="modal fade" id="SignUpModalCenter" tabindex="-1" role="dialog" aria-labelledby="SignUpModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
          <slot name="header">
                <h5 class="modal-title" id="exampleModalLongTitle">Sign Up</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </slot>
          </div>
          <div class="modal-body">

            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="CreateFirstName">First Name</label>
                  <input type="text" class="form-control" id="CreateFirstName" placeholder="First Name">
                </div>
                <div class="form-group col-md-6">
                  <label for="CreateLastName">Last Name</label>
                  <input type="text" class="form-control" id="CreateLastName" placeholder="Last Name">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-12">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                </div>
              </div>
            </form>

          </div>

          <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Create Account</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    `
})