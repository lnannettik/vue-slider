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


        //         Bonus
        // Applicare l’autoplay allo slider: ogni 3 secondi cambia immagine automaticamente.

        // timer 30 sec
        // let second = 5; // 


        setInterval (() => {

            // se il timer arriva a 0 fermati
            if(second === 0) {
                // stop the count
                clearInterval(timer)

            } else {
                // sottrai 1 a second
                second--;
            }     
            
        }, 3000)}


    }
});
