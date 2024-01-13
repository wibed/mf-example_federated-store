import React from 'react';
import { Suspense, useReducer, useTransition } from "react";
import type { ContentProps } from '../Content';

import "./App.css"


const Content = React.lazy(
  () => import('../Content') as Promise<{ default: React.FC<ContentProps> }>,
);



const App = () => {
  const [counterOpen, toggleCounter] = useReducer(b => !b, false)
  const [quotesOpen, toggleQuotes] = useReducer(b => !b, false)
  const [, startTransition] = useTransition()
  return (
    <div className="App">
      <header className="App-header">
        <details open={counterOpen}>
          <summary onClick={() => startTransition(toggleCounter)}>
            Counter example (lazy)
          </summary>
          <Suspense>
            <Content/>
          </Suspense>
        </details>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
    </div>
  )
}

export default App