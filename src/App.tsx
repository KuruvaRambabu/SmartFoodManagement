import React, { Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Common/components/HomePage'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'mobx-react'
;``
import stores from './Common/stores/index'
import i18n from './Authentication/i18n'
import './App.css'
import { authenticationRoutes } from './Authentication/routes'

const App = () => {
   return (
      <Provider {...stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={true}>
               <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                     {authenticationRoutes}
                     <Route path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
