import { SERVICES } from '../../actionTypes';


export default (state=null, action) => {
    switch (action.type) {
        case SERVICES.SEARCHED_ITEMS:
            return action.payload.categories;
    }
    return state;
}
