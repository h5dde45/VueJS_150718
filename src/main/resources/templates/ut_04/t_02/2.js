new Vue({
    el: "#app",
    data: {
        formData: {
            firstname: '',
            lastname: '',
            url: 'http://www.',
            badge: '',
            bookisbn: "",
            technologeis: ""
        }
    },
    computed: {
        fullname: function(){
            return this.formData.firstname + " "
                + this.formData.lastname;
        }
    }
});