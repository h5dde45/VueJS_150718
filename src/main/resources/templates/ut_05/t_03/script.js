let vm1 = new Vue({
    el: "#app",
    data: {
        formData: {
            firstname: "",
            lastname: ""
        }
    },
    methods: {
        submit: function () {
            alert(this.fullname);
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname +
                " " + this.formData.lastname;
        }
    }
});
let vm2 = new Vue({
    el: "#app2",
    data: {
        formData: {
            firstname: "",
            lastname: ""
        }
    },
    methods: {
        submit: function () {
            alert(vm1.fullname);
            // alert(this.fullname);
            // vm1.submit();
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname +
                " " + this.formData.lastname;
        }
    }
});

console.log(vm1);