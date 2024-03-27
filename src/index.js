import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD
import { createRoot } from "react-dom/client"; // Import createRoot
 import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> 62ed254d6ee4b518e47530088d79b7d9ef37c0fd
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
// import SimpleReactLightbox from "simple-react-lightbox";

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
