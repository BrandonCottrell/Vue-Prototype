const app = Vue.createApp({
    data: function(){
        return {
            newTrip: {
                name: '',
                startDate: '03/25/2015',
                endDate: '03/30/2015',
                people: 1,
                flight: false,
                rentalCar: false,
                activities: '',
                favorited: true,
                completed: false
            },
            tripList: [
                {name: 'Denver...', startDate: '03/25/2015', endDate: '03/30/2015', people: 2, flight: false, rentalCar: true, activities: 'Tours', favorited: true, completed: false }, //favorited
                {name: 'Green Bay...', startDate: '04/25/2015', endDate: '04/30/2015', people: 3, flight: true, rentalCar: false, activities: 'Day Trips', favorited: true, completed: false }, //favorited
                {name: 'Grand Canyon...', startDate: '05/25/2015', endDate: '05/30/2015', people: 4, flight: false, rentalCar: true, activities: 'Hiking', favorited: true, completed: true } //favorited
            ],
        }
    },

    
    methods: {
        addIt: function(){
            // add item to the list
            this.tripList.push(this.newTrip);

            // clear the form
            this.newTrip = {
                name: '',
                startDate: '',
                endDate: '',
                people: 1,
                flight: false,
                rentalCar: false,
                activities: '',
                favorited: true,
                completed: false
            };
        },
        deleteIt: function(){
            this.tripList.pop(this.newTrip);
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