import { createStore } from 'redux';
import todoApp from '../reducer/reducer';

export const store = createStore(todoApp);