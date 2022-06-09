const root = new Vue({
    el:'#app',
    data: {
        h1Text: "Counter Strike: Global Offensive",
        imgCS: "img/fb_image.png",
        logoMajor: "img/Pgl_major_stockholm_2021_logo.png",
        majorLocation: "Avicii Arena, Stockholm, Sweden",
        majorDates: "October 26-November 7, 2021",
        isVisible: false,
    },
    methods: {
        visiblePost(){
            this.isVisible = !this.isVisible;
        },
        
    },
});