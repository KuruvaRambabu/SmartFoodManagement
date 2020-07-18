import React, { Component } from 'react'
import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'
import { Route } from 'react-router-dom'
import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../Common/routes/RouteConstants'

import SignInRoute from './SignInRoute'
import SignUpPage from '../components/SignUpPage/SignUpPage'
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
      path={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE}
      component={SignUpRoute}
   />
]
