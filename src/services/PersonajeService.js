import Global from "@/Global";
import axios from "axios";

export default class PersonajeService {

    getAllPersonajes(){
        return new Promise(function(resolve){
            var request = Global.url + "api/personajes";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
    
    getByIdPersonajes(id){
        return new Promise(function(resolve) {
            var request = Global.url + "/api/Series/PersonajesSerie/" + id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    postPersonaje(personaje){
        return new Promise(function(resolve) {
            var request = Global.url + "/api/personajes";

            axios.post(request, personaje).then(() => {
                resolve()
            })
        })
    }

    putPersonaje(idPersonaje, idSerie){
        return new Promise(function(resolve) {
            var request = Global.url + "/api/personajes/" +idPersonaje+ "/" +idSerie ;

            axios.put(request).then(() => {
                resolve()
            })
        })
    }

}