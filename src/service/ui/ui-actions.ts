
export enum ActionTypes{
    SHOW_MOBILE_FAVORITES = 'SHOW_MOBILE_FAVORITES',
}

export const changeMobileFavorites = () => (dispatch:Function) => {
    dispatch({type: ActionTypes.SHOW_MOBILE_FAVORITES});
}