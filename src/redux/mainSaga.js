import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView28905Saga from '../features/CalendarView28905/redux/sagas';
import EmailAuth28874Saga from '../features/EmailAuth28874/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView28905Saga,
EmailAuth28874Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}