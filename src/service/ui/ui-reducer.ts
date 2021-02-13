import * as FavoriteResponse from './ui-actions';

export interface ReducerTypes{
    show: boolean
}

const INITIAL_STATE: ReducerTypes = {
    show: false,
}

interface ShowMobileFavoritesTypes{
    readonly type: string
}

export default ( state = INITIAL_STATE, action:ShowMobileFavoritesTypes ) =>{
    switch ( action.type ){
        case(FavoriteResponse.ActionTypes.SHOW_MOBILE_FAVORITES):
            return {show: !state.show };
        default: return state;
    }
}