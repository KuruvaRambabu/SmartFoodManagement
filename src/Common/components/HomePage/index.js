import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../logo.svg'

import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../routes/RouteConstants'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <Link to={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}>
               CLick me to go to Smart Food Management App
            </Link>
         </header>
      </div>
   )
}

export default App
