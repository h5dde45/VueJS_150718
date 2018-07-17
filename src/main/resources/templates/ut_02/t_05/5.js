Vue.component('task', {
    template: '<h1>{{message}}</h1>',
    props: ["message"]
});

let app = new Vue({
    el: '#app',
    data: {}
});