import { GET_STATE } from './actionTypes.js';

const headerState = (state = false, action) =>{
    
    switch(action.type){
        case GET_STATE:
            return {
                ...state, 
                headerState: action.detail
                    };

        default:
            return state;
    }
}

export default headerState;