import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js"
import "./index.css"
import reducer, {initialState} from "./reducer"
import { StateProvider } from './StateProvider.js';


ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById('root')
);


