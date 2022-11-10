<template>
    <div class="container">
        <h1 class="my-5">Nuevo personaje</h1>
        <form method="post" v-on:submit.prevent="crearPersonaje">
            <div class="mt-3">
                <label class="form-label">Nombre: </label>
                <input type="text" class="form-control" v-model="personaje.nombre"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Imagen: </label>
                <input type="text" class="form-control" v-model="personaje.imagen"/>
            </div>
            <div class="mt-3">
                <label class="form-label">Serie: </label>
                <select class="form-select" v-model="personaje.idSerie">
                    <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}</option>
                </select>
            </div>
            <button class="btn btn-success mt-3">Insertar personaje</button>
        </form>
        <hr/>
    </div>
</template>

<script>
import ServiceSerie from './../services/SerieService';
import PersonajeService from './../services/PersonajeService';

const service = new ServiceSerie();
const servicePersonaje = new PersonajeService();

export default {
    name: 'NuevoPersonaje',

    data() {

        return {
            series: [],
            status: false,
            personaje: {
                nombre: "",
                image: "",
                idSerie: ""
            }
        };

    },

    mounted() {

        service.getAllSeries().then(result => {
            this.series = result;
            this.status = true
        })

    },

    methods: {
        
        crearPersonaje(){
            this.personaje.idSerie = parseInt(this.personaje.idSerie)
            servicePersonaje.postPersonaje(this.personaje).then(() => {
                this.$router.push("/personajes/" + this.personaje.idSerie)
            })
        }
        
    }

};
</script>

<style scoped>

</style>