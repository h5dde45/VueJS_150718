const car = (name, model, owner, year, phone, image) =>
    ({name, model, owner, phone, image, year});

const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car("Ford", "Focus", "Max", 2016,
        "+7 921 756 34 87", "images/focus.jpg"),
    car("Ford", "Mandeo", "Vlad", 2018,
        "+7 921 222 55 87", "images/mondeo.jpg"),
    car("Porsche", "Panamera", "Ir", 2017,
        "+7 111 43 87", "images/panamera.jpg")
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: "",
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success oorder: ${this.car.name}
                 - ${this.car.model}`, "ok")
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Success oorder: ${this.car.name}
                 - ${this.car.model}`, "cnl")
            )
        }
    },
    computed: {
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide' : 'Show phone'
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 ||
                    car.model.indexOf(this.search) > -1
            });
        }
    }
});