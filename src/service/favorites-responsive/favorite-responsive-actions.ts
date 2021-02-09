
let Actions: any = {};

Actions.types = {
    SHOW_MOBILE_FAVORITES : 'SHOW_MOBILE_FAVORITES',
}

export { Actions };

export const changeMobileFavorites = () => (dispatch:any) => {
    dispatch({type: Actions.types.SHOW_MOBILE_FAVORITES});
}