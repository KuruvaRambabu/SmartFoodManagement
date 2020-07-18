import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo.svg'
import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../routes/RouteConstants'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
            <Link to='/page-1'>Page 1</Link>
            <Link to={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}>
               Smart Food Management
            </Link>
         </header>
      </div>
   )
}

export default App
