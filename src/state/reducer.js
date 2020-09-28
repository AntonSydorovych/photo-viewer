import {photosAPI} from '../api/api';
const GET_PHOTOS = 'GET_PHOTOS';


let initialState = {
    photos: []
};

export const reducer = (state = initialState, action) => {

    if(action.type === GET_PHOTOS){
        console.log(action.payload)
        return {
            ...state,
            photos: [...action.payload]
        }
    } else {
        return {...state};
    }
};


const getPhotos = (photos) => {

    return {
        type: GET_PHOTOS,
        payload: photos
    }
};

export const getPhotosTC = (device, martianDay, camera) => (dispatch) => {

        photosAPI.getPhotos(device, martianDay, camera)
            .then(response => {
//                console.log('response in getPhotosTC:'+response.data.photos);
                dispatch(getPhotos(response.data.photos))
            });
}

