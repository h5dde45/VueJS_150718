Vue.filter("capatilize",function (value) {

});

new Vue({
    el: "#app",
    data: {
        show: false,
        message: "hEllo",
        cars: [
            {model: "bmw", speed: 23},
            {model: "audi", speed: 44},
            {model: "mb", speed: 66},
            {model: "ford", speed: 77}
        ]
    },
    methods: {},
    computed: {
        showMess(){
            return this.message.toUpperCase();
        }
    },
    filters:{
        lowercase(value){
            return value.toLowerCase();
        }
    }

});