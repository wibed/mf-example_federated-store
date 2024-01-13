import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';


import { store } from './store';
import App from './features/Home';


const container = document.getElementById("root");

if (container) {
  const root = ReactDOMClient.hydrateRoot(container, <App store={store}/>);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={{}}/>
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
