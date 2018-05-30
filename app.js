import MovieCard from  'MovieCard.vue';

new Vue({
    el: "#app",    
    data: {
        movies: [
            {
                title: "El señor de los anillos 1",
                image:
                "https://k61.kn3.net/taringa/1/9/8/F/6/A/lagarrapatasucia/6F0.jpg"
            },
            {
                title: "Volver al futuro",
                image:
                "https://static.pelisfox.tv/static/movie/cover/original/32a7d654271dfd002814c6303b1703c2.jpg"
            },
            {
                title: "El santo contra las momias de Guanajuato",
                image:
                "https://cafeanimelair2.files.wordpress.com/2017/08/las-momias-de-guanajuato-1.jpg?w=242"
            }
        ]
    },
    components: {//Importar componentes que se desean usar.
        'movie-card': MovieCard,// Puede quedar como MovieCard dado que el componente tiene un name y se respeta para hacer uso de él como un tag.
    }
});
