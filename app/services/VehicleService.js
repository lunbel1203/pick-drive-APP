import axios from 'axios';

export class VehicleService {
    
    baseUrl = 'http://localhost:1337';

    readAll() {
        return axios.get(this.baseUrl+'/vehiculos').then(response => response.data);
    }

}