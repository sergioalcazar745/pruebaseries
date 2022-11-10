<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="./../assets/images/logo.png" width="100"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/nuevo" class="nav-link">Nuevo personaje</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/modificar" class="nav-link">Modificar personaje</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Series
                        </a>
                        <ul class="dropdown-menu" v-if="status">
                            <li v-for="serie in series" :key="serie">
                               <router-link :to="'/serie/' + serie.idSerie" class="dropdown-item">{{serie.nombre}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ServiceSerie from './../services/SerieService';

const service = new ServiceSerie();

export default {
    name: 'MenuComponent',

    data() {
        return {
            series: [],
            status: false
        };
    },

    mounted() {
        service.getAllSeries().then(result => {
            this.series = result
            this.status = true;
        })
    },

};
</script>

<style scoped>

</style>