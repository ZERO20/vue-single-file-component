<template>
    <div>
        <img width="100" :src="image" :alt="title" />
        <h2>{{ title }}</h2>
    </div>    
</template>

<script>
export default {
    name: 'movie-card', //Nombre del componente o nombre que tendrá en el html
    components: {},//importar componentes
    props:{
        image: string,
        title: string
    },
    methods: {}, //si existieran metodos
    data: function (){//es posible abreviar data con data() { return {} }
        return {
            'mensaje': 'Hola! son las peliculas disponibles.'
        }
    },
    mounted(){
        console.log('Montado');
    }
}
</script>

<style scoped>
    h2{
        font-size: 18pt;
    }
</style>


