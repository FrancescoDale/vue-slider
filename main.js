var app = new Vue ( {
    el : '#root',
    data : {
        imageIndex : 0,
        pics : [
            'https://uozzart.com/wp-content/uploads/2019/07/Campo-de-fiori.jpg',
            'https://lh3.googleusercontent.com/proxy/oCybApm2jvTAzTDao4xQH0L2Bemv2hliMU3zRyjvw13gSVWNd2sgm5GVZc9W_g2s05pyqTHPtAbmgqtSEoG8rYJHKg8PTd0HFhMcMufz479OFhVwAncMs-JTs59q3AOWvCV8qA',
            'https://st.ilfattoquotidiano.it/wp-content/uploads/2020/04/21/roma1200-1-690x362.jpg',
            'https://www.ilfaroonline.it/photogallery_new/images/2020/03/campidoglio-121445.660x368.jpg',
        ],
        messaggio : 'testo alternativo',

    },
    methods : {

        //fanno scorrere lo slider modificando il valore di imageIndex

        leftArrowClick() {
            // uso this
            this.imageIndex --;
            if (this.imageIndex < 0) {
                this.imageIndex = this.pics.length - 1;
            }
            console.log('click');
        },
        rightArrowClick() {
            this.imageIndex ++;
            if (this.imageIndex > this.pics.length - 1) {
                this.imageIndex = 0;
            }
            console.log('click');
        },

        autoNext() {
            rightArrowClick();
        },

    },

}
);

// timer

//uso la funzione setinterval per settare un timer a 4 secondi, come parametri avrà una funzione e i 4000 ms

setInterval(autoNext, 4000);
