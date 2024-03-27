import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client"; // Import createRoot
 import 'bootstrap/dist/css/bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
// import SimpleReactLightbox from "simple-react-lightbox";

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react/demo">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
