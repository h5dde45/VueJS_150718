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
        showDetails: false
    },
    computed: {
        fullname: function () {
            return this.formData.firstname +
                " " + this.formData.lastname;
        },
        splitString: function () {
            return this.formData.technologies.split(',');
        }
    }
});