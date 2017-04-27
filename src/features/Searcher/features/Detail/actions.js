import services from '../../../../utils/servicies';
import { SERVICES } from '../../../../actionTypes';


const { getItem } = services;

export function getItemDetail(id) {
  return (dispatch) => {
    getItem(id).then((data) => {
      dispatch({
        type: SERVICES.GET_ITEM_DETAIL,
        payload: data
      })
    })
  }
}

export function itemDetailReducer(state=null, action) {
  switch (action.type) {
    case SERVICES.GET_ITEM_DETAIL:
      return action.payload.item;
  }
  return state;
}