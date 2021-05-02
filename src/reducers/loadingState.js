import { LOADED_STATE } from './actionTypes.js';

const loadedState = (state = false, action) =>{
    switch(action.type){
        case LOADED_STATE:
            return action.loading;
            
        default:
            return state;
    }
}

export default loadedState;
