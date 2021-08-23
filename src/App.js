import React, {useRef, useState, useCallback, useEffect} from 'react'
import { compose } from 'redux'
import './api/api'

import { Gallery } from './components/Gallery/Gallery'
import './scss/App.scss'

 
// import { IMAGES  } from './api/endpoints'

function App() {
  return (
    <div className='wrapper'>
        <div className="content">
          <h1>Task from Ekwid.</h1>
          <Gallery/>
        </div>
    </div>
  )
}
  
export default App;
