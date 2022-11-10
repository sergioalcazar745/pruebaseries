import Global from "@/Global";
import axios from "axios";

export default class SerieService {

    getAllSeries(){
        return new Promise(function(resolve){
            var request = Global.url + "api/series";

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    getByIdSerie(id){
        return new Promise(function(resolve) {
            var request = Global.url + "api/series/" + id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

}