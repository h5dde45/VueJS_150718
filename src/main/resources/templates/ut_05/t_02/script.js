new Vue({
    el: "#app",
    data: {
        formData: {
            firstname: "",
            lastname: "",
            url: "http://www.",
            badge: "",
            bookisbn: "",
            technologies: ""
        },
        showDetails: false,
        book: {
            title: "",
            url: ""
        }
    },
    methods: {
        submit: function () {
            this.showDetails = true;
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname +
                " " + this.formData.lastname;
        },
        splitString: function () {
            return this.formData.technologies.split(',');
        }
    },
    watch: {
        "formData.bookisbm": function () {
let url="";
        }
    }
});