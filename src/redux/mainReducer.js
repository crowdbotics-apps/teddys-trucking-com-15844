import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView28905Reducer from '../features/CalendarView28905/redux/reducers';
import Dashboard128901Reducer from '../features/Dashboard128901/redux/reducers'
import EmailAuth28874Reducer from '../features/EmailAuth28874/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView28905: CalendarView28905Reducer,
Dashboard128901: Dashboard128901Reducer,
EmailAuth28874: EmailAuth28874Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});