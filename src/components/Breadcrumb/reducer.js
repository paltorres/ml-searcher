import { SERVICES } from '../../actionTypes';


// const { SEARCH_ITEMS } = SERVICES;

export default (state=null, action) => {
    switch (action.type) {
        case SERVICES.SEARCHED_ITEMS:
            return action.payload.categories;
    }
    return state;
}
