app.component('AppModal', {
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
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" :aria-labelledby="id + 'SignInModalCenterTitle'" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="id + 'SignInModalCenterTitle'">{{title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    
                <slot></slot>

                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
})