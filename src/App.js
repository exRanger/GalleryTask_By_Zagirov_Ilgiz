import React, {useRef, useState, useCallback, useEffect} from 'react'

import { Gallery } from './components/Gallery/Gallery'
import './scss/App.scss'

function App() {
  return (
    <div className='wrapper'>
        <div className="content">
          <h1>Simple react gallery</h1>
          <Gallery/>
        </div>
    </div>
  )
}
  
export default App;
