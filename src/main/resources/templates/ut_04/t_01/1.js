Vue.component('max',{
   template:'<h1>111, name</h1> '
});

new Vue({
    el: '#app',
    data: {
        name: "asd",
        age: 33,
        url: "https://yandex.ru/",
        currentBook: 'vuejs book',
        books:[]
    },
    methods: {
        changeName(){
            this.name = "444";
        },
        addBook(){
            this.books.push(this.currentBook)
        }
    },
    computed: {
        userInfo(){
            return this.name + " is " + this.age
        }
    },
    watch: {
        name: function () {
            console.log(this.name);
        }
    }
});