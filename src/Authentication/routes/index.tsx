import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE,
   SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE
} from '../../Common/routes/RouteConstants'

import SignInRoute from './SignInRoute'
import SignUpRoute from './SignUpRoute/SignUpRoute'

export const authenticationRoutes = [
   <Route
      key={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}
      exact
      path={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}
      component={SignInRoute}
   />,
   <Route
      key={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}
      exact
      path={SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE}
      component={SignUpRoute}
   />
]
