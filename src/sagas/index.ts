import { all } from 'redux-saga/effects';
/* PLOP_INJECT_SAGAS_IMPORT */
import userSagas from './user'

export default function* rootSagas() {
    yield all([
        /* PLOP_INJECT_SAGAS_INDEX */
		userSagas(),
    ]);
}
