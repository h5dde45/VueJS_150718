Vue.component("app-car", {
    data: function () {
        return {
            cars: [
                {model: "bmw"},
                {model: "audi"},
                {model: "mb"},
                {model: "ford"},
                {model: "fiat"},
                {model: "volvo"},
                {model: "vw"}
            ]
        };
    },
    template:
    '<div><div class="car" v-for="car in cars"><p >{{car.model}}</p></div></div>'
});

new Vue({
    el: "#app",
    data: {},
    methods: {},
    computed: {},
    filters: {},
    comments: {
        "app-car2": {
            data: function () {
                return {
                    cars: [
                        {model: "bmw"},
                        {model: "audi"},
                        {model: "mb"},
                        {model: "ford"},
                        {model: "fiat"}
                    ]
                };
            },
            template: '<div><div class="car" v-for="car in cars"><p >{{car.model}}</p></div></div>'
        }
    }
});
new Vue({
    el: "#app2",
    data: {},
    methods: {},
    computed: {},
    filters: {}
});