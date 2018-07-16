let app = new Vue({
    el: '#app',
    data: {
        title: "Style",
        sizeToggle: false,
        isRounded: false,
        disabled: false,
        fontColor: '#ccc',
        backgroundColor: 'yellow'
    },
    computed: {
        styles: function () {
            return {
                color: this.fontColor,
                background: this.backgroundColor
            }
        }
    }
});