let app = new Vue({
    el: '#app',
    data: {
        count: 0,
        url: "",
        cleanUrl: ""
    },
    methods: {
        countUp: function () {
            this.count++;
        },
        countDown: function () {
            this.count--;
        },
        cleanerUrl: function () {
            this.cleanUrl=this.url.replace(/^https?:\/\//,'')
                .replace(/\/$/,'')
        }
    }

});