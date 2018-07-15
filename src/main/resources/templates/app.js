const car = (name, model, owner, year, phone, image) =>
    ({name, model, owner, phone, image, year});

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
        selectCarIndex: 0,
        phoneVisibility: false
    },
    methods: {
        selectCar: function (index) {
            this.car = cars[index];
            this.selectCarIndex = index
        }
    }
});