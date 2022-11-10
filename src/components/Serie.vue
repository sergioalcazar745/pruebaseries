<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-if="serie != null">
            <img :src="serie.imagen" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{serie.nombre}}</h5>
                <p class="card-text">IMDB: {{serie.puntuacion}}</p>
                <router-link :to="'/personajes/' + serie.idSerie" class="btn btn-success btn-auto">Personajes</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceSerie from './../services/SerieService';

const service = new ServiceSerie();

export default {
    name: 'SerieComponent',

    data() {

        return {
            serie: null
        };

    },

    mounted() {

        this.getSeries();

    },

    methods: {

        getSeries(){
            service.getByIdSerie(this.$route.params.id).then(result => {
                this.serie = result
            })
        }
        
    },

    watch: {

        '$route.params.id'(newVal, oldVal){
            if(newVal != oldVal){
                this.getSeries();
            }
        }

    }

};
</script>

<style scoped>

</style>