import axios from 'axios';


//https://api.mapbox.com/geocoding/v5/mapbox.places/pintor%20pinazo.json?proximity=-0.4107243080351566%2C39.51154283773391&language=es&access_token=YOUR_MAPBOX_ACCESS_TOKEN


const searchApi = axios.create(
    { 
        baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places', 
        params:{
            limit: 5,
            language:'es',
            access_token: 'pk.eyJ1IjoiZGFzaWxyb2dtYWlsY29tIiwiYSI6ImNsaDdiZjVhcTBkNmYzZHBnb2t2NnFvamUifQ.1QcAi4Q1Uf4kN9T73WnnOA'
        }
});

export default searchApi;