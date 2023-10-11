app.component('SigninModal', {
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
    <div class="modal fade" id="SignInModalCenter" tabindex="-1" role="dialog" aria-labelledby="SignInModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <slot name="header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </slot>
                </div>
                <div class="modal-body">
                    
                    <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <a href="#">Forgot Password?</a>
                    </form>

                </div>
                <div class="modal-footer">
                <slot name="footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Sign In</button>
                </slot>
                </div>
            </div>
            </div>
        </div>
    `
})