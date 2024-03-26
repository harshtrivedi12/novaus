import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import todoReducers from "./reducers/Reducers";
import { reducer as reduxFormReducer } from "redux-form";
import skillSlice from "./reducers/skillSlice";
import postAJobSlice from "./reducers/postAJobSlice";
import manageJobSlice from "./reducers/manageJobSlice";
import companyDataSlice from "./reducers/companyDataSlice";
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  todoReducers,
  skills: skillSlice,
  postAJobSlice: postAJobSlice,
  manageJobSlice: manageJobSlice,
  form: reduxFormReducer,
  companyDataSlice: companyDataSlice,
});

//const store = createStore(rootReducers);

export const store = createStore(reducers, composeEnhancers(middleware));
