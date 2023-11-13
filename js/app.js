const app = Vue.createApp({
    data: function(){
         let trips = [
             // trying to get Models to work
             new Trip('Denver','2024-03-25', '2024-03-30', '$', true, false),
             new Trip('Green Bay','2024-04-25', '2024-04-30', '$$', true, false),
             new Trip('Grand Canyon','2024-05-25', '2024-05-30', '$$$', true, true)
         ];
        return {
            newTrip: new Trip(),
            // tripList: [
            //     {name: 'Denver', startDate: '2024-03-25', endDate: '2024-03-30', price: '$', favorited: true, completed: false }, //favorited
            //     {name: 'Green Bay', startDate: '2024-04-25', endDate: '2024-04-30', price: '$$', favorited: true, completed: false }, //favorited
            //     {name: 'Grand Canyon', startDate: '2024-05-25', endDate: '2024-05-30', price: '$$$', favorited: true, completed: true } //favorited
            // ],
            editItem: {},
             tripList: trips
        }
    },

    
    methods: {
        addIt: function(){
            // add item to the list
            this.tripList.push(this.newTrip);

            //clear the form
            this.newTrip = new Trip();
        },
        deleteIt(item){
            console.log(item);
            console.log(this.tripList)
            this.tripList.splice(this.tripList.indexOf(item),1);

        }
    },
    computed: {
        favoriteList: function(){
            return this.tripList.filter(function(item){
                return !item.completed && item.favorited;
            })
        },
        completedList: function(){
            return this.tripList.filter(function(item){
                return item.completed;
            })
        },
    },
    mounted: function() {
        if(localStorage.getItem('tripList')){
            this.tripList = JSON.parse(localStorage.getItem('tripList'));
        }
    },

    watch: {
        tripList: {
            handler: function(newList){
                localStorage.setItem('tripList', JSON.stringify(this.tripList));
            },
            deep: true,
        }
    }
});