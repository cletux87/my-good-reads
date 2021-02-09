import * as FavoriteResponse from './favorite-responsive-actions';

const INITIAL_STATE: any = {
    show: false,
    
}

export default ( state = INITIAL_STATE, action:any ) =>{
    switch ( action.type ){
        case(FavoriteResponse.Actions.types.SHOW_MOBILE_FAVORITES):
            return {show: !state.show };
        default: return state;
    }
}