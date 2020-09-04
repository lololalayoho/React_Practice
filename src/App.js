import React from 'react';
import Works from './2020-09-04(redux)/Works';
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
          <Works/>
      </Provider>
      </div>
  );
}

export default App;
