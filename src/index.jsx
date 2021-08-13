import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createStore from "./appStore/store";
import {Provider} from './appStore/connect'
import counterReducer from "./components/counter/counterReducer";
import combineReducers from "./appStore/combineReducers";
import formSubmitReducer from "./components/formSubmit/formSubmitReducer";



let mainReducer = combineReducers({
  counter: counterReducer,
  form: formSubmitReducer
})

let store = createStore(mainReducer)
ReactDOM.render(
	// <React.StrictMode>
    <Provider store= {store}>
			<App />
    </Provider>
	// </React.StrictMode>,
  ,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();