import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppStore } from 'shell/store';

import App from './features/App';


// const container = document.getElementById("root");
// const store = React.lazy(
//   () => import('shell/store') as Promise<{ default: React.FC<AppStore>}>
// );

// if (container) {
  // const root = ReactDOMClient.hydrateRoot(container, <App />);

  // root.render(
const RemoteApp = (store: AppStore ) => 
      <Provider store={store}>
        <App/>
      </Provider>

export default RemoteApp

  // )
// } else {
//   throw new Error(
//     "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
//   )
// }
