/*
 * Vue Slider
 */
// CHECH
console.log(`JS OK`);

const app = new Vue ({

    el: '#app',

    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        activeSlide: 0,
        autoPlayId : 0,
    },

    created() {
        // inserisco la time function che riprende nextSlide
        this.autoPlay();
    },

    methods: {

        // prevSlide
        prevSlide() {
            this.activeSlide--;

            if(this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        },
    

        // next Slide
        nextSlide() {
            this.activeSlide++;

            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
        },


        // set Slide by click
        setSlide(slideIndex) {
            // console.log(`check ${slideIndex}`);
            this.activeSlide = slideIndex;

        },

        // autoPlay 3 sec
        autoPlay() {
            this.autoPlayId = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },


        // stop autoPlay
        stopAutoPlay() {
            console.log('stop auto play');
            clearInterval(this.autoPlayId)
        },
            

    }
});
