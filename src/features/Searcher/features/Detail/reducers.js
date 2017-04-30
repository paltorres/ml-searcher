import { SERVICES } from '../../../../actionTypes';


export function itemDetailReducer(state=null, action) {
  switch (action.type) {
    case SERVICES.FETCHED_ITEM:
      return action.payload.item;
  }
  return state;
}