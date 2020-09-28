import * as axios from 'axios';

const key = 'Bjdda0GpoNH2FUSgMghZsX5Z4v6EUe8IcYxicI6s';


export const photosAPI = {
    getPhotos: (device, martianDay, camera) => {
     //   console.log('https://api.nasa.gov/mars-photos/api/v1/rovers/'+device+'/photos?sol='+martianDay+'&camera='+camera+'&api_key='+key);
        return axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/${device}/photos?sol=${martianDay}&camera=${camera}&api_key=${key}`)
    }
};





// Bjdda0GpoNH2FUSgMghZsX5Z4v6EUe8IcYxicI6s ---- KEY

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=Bjdda0GpoNH2FUSgMghZsX5Z4v6EUe8IcYxicI6s
