import { FenixContext } from './FenixContext';

export const FenixReducer = (state: FenixContext, action: any) : FenixContext => {
    switch (action.type) {
        case 'toggleRotation':
            return{
                ...state,
                helmet: action.payload
            }
            
            default:
            return state
    } 
}