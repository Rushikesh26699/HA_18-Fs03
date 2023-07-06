import { legacy_createStore as createStore } from "redux";
import myReducer from "../Reducers/myReducer";

const myReduxStore = createStore(myReducer);

myReduxStore.subscribe(() => {
  console.log(myReduxStore.getState());
});

export default myReduxStore;
