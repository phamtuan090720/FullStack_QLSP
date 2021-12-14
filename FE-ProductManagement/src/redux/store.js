import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { listProductReducer, deleteProductReudcer, addProductReudcer, detailProductReudcer,updateProductReducer } from "./reducer/ProductReducer";
const rootReducer = combineReducers({
    listProductReducer,
    deleteProductReudcer,
    addProductReudcer,
    detailProductReudcer,
    updateProductReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;