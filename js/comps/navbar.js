app.component('Navbar', {
  props: {
    authUser: {required: true},
},

methods: {
    login(){
        // Login with Google
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .catch(error =>{
                // TODO: let user know
                console.error(error, error.code, error.message);
            })
    },

    logout(){
        // logout
        firebase.auth().signOut();
    },
},
    
    template : `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand ml-3"><svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg> Trip Planner</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="home.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="mytrips.html">My Trips</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tripPlanner.html">Plan Trip</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="search.html">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="login">Login</a>
      </li>
    <!-- <button id="addButton" class="btn btn-primary d-flex ms-auto order-5" data-toggle="modal" data-target="#newTripModal">Add Trip</button> -->
</nav>

    `
})