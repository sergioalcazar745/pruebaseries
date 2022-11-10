<template>
    <div class="container">
        <h1 class="my-5">Modificar personaje</h1>
        <form method="post" v-on:submit.prevent="modificarPersonaje">
            <div class="mt-3">
                <label class="form-label">Serie: </label>
                <select class="form-select" v-model="idSerie" @change="showSerie">
                    <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}</option>
                </select>
            </div>
            <div class="mt-3">
                <label class="form-label">Personaje: </label>
                <select class="form-select" v-model="idPersonaje" @change="showPersonaje">
                    <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">{{personaje.nombre}}</option>
                </select>
            </div>
            <button class="btn btn-success mt-3">Modificar personaje</button>
        </form>
        <hr/>
        <div v-if="personaje != null">
            <h1 style="color:blue">{{personaje.nombre}}</h1>
            <img :src="personaje.imagen" width="150"/>
        </div>
        <div v-if="serie != null">
            <h1 style="color:red">{{serie.nombre}}</h1>
            <img :src="serie.imagen" width="150"/>
        </div>
    </div>
</template>

<script>
import ServiceSerie from './../services/SerieService';
import PersonajeService from './../services/PersonajeService';

const service = new ServiceSerie();
const servicePersonaje = new PersonajeService();

export default {
    name: 'ModificarPersonaje',

    data() {
        return {
            series: [],
            personajes: [],
            idSerie: 0,
            idPersonaje: 0,
            personaje: null,
            serie: null,
        };
    },

    mounted() {

        service.getAllSeries().then(result => {
            this.series = result;
            this.idSerie = this.series[0].idSerie 
        })

        servicePersonaje.getAllPersonajes().then(result => {
            this.personajes = result
            this.idPersonaje = this.personajes[0].idPersonaje 
        })

    },

    methods: {

        showPersonaje(){
            var personaje = this.personajes.filter(item => item.idPersonaje == parseInt(this.idPersonaje))
            this.personaje = personaje[0]
        },

        showSerie(){            
            var serie = this.series.filter(item => item.idSerie == parseInt(this.idSerie))
            this.serie = serie[0]
        },

        modificarPersonaje(){
            servicePersonaje.putPersonaje(this.idPersonaje, this.idSerie).then(() => {
                this.$router.push("/personajes/" + this.idSerie)
            })
        }

    }

};
</script>

<style scoped>

</style>