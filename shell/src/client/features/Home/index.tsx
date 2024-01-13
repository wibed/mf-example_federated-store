import React from 'react';
import { AppStore } from '../../store';


const RemoteApp = React.lazy(
  () => import('home/App') as Promise<{ default: React.FC<{ store: AppStore }> }>,
);


const App = ({ store: store }) => {
  const [state, setState] = React.useState<string>('');

  return (
    <div style={{ padding: '1rem', borderRadius: '0.25rem', border: '4px dashed #fc451e' }} >
      <React.Suspense fallback={<h1>Loading....</h1>}>
        <RemoteApp store={store}/>
      </React.Suspense>
    </div>
  );
};

export default App;
