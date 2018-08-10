const car = (name, model, owner, year, phone, image) => {
    return {name, model, owner, year, phone, image}
};

const cars = [
    car("Ford", "Focus", "First", 2019,
        "+7 921 345 67 89",
        "../ut_01/images/focus.jpg"),
    car("Ford", "Mondeo", "Second", 1234,
        "+7 921 345 67 82",
        "../ut_01/images/mondeo.jpg"),
    car("Porshe", "Panamera", "Third", 1567,
        "+7 921 345 67 81",
        "../ut_01/images/panamera.jpg")
];

new Vue({
    el: "#app",
    data: {
        cars: cars,
        car: cars[0],
        logs:[],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: "",
        modalVisibility: false
    },
    methods: {
        selectCar (index) {
            this.car = cars[index];
            this.selectCarIndex = index;
            this.phoneVisibility = false
        },
        newOrder(){
            this.modalVisibility = false
        },
        cancelOrder(){
            this.modalVisibility = false
        }

    },
    computed: {
        phoneBtnText(){
            return this.phoneVisibility ? "Hide phone" : "Show phone";
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1
                    || car.model.indexOf(this.search) > -1;
            });
        }
    }
});