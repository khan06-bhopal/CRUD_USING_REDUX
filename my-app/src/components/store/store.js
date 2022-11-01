import { createStore } from "redux";
import { contactReducer } from "../../redux/reducers/contactReducer";

  const store = createStore(contactReducer)
  export default store