import { IMAGE_LOADING, IMAGE_CHECK } from './actionTypes.js';
let imagesStatus = {
    images: []
}

const imageLoadingState = (state = imagesStatus, action) =>{
    
    switch(action.type){
        case IMAGE_LOADING:
            const imagesState = state.images.push(action.state);
            //Receber um array de imagens
            return {...state, imagesState};

        
        case IMAGE_CHECK:
            //Após as imagens estarem carregadas passar este campo a true
            return imagesState;

        default:
            return state;
    }
}

export default imageLoadingState;