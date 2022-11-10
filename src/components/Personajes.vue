<template>
    <div class="container">
        <table class="table table-striped table-hover my-5" v-if="status">
            <thead>
                <th>Nombre</th>
                <th>Imagen</th>
            </thead>
            <tbody v-html="getPersonajes"></tbody>
        </table>
        <router-link class="btn btn-danger mt-3" :to="'/serie/' + this.$route.params.id">Volver</router-link>
    </div>
</template>

<script>
import PersonajeService from './../services/PersonajeService';

const service = new PersonajeService();

export default {
    name: 'PersonajeComponent',

    data() {

        return {
            personajes: [],
            status: false
        };

    },

    computed: {

        getPersonajes(){
            var aux = "";

            for (var personaje of this.personajes) {
                aux += 
                `
                <tr>
                    <td>${personaje.nombre}</td>
                    <td><img src="${personaje.imagen}" width="150"/></td>
                </tr>
                `
            }

            return aux
        }

    },

    mounted() {

        service.getByIdPersonajes(this.$route.params.id).then(result => {
            this.personajes = result;
            this.status = true;
        })

    },

};
</script>

<style scoped>

</style>