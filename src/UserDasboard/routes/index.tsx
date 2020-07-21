import { SMART_FOOD_MANAGEMENT_HOME_PAGE } from '../../Common/routes/RouteConstants'
import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import { Route } from 'react-router-dom'

export const userDashboardRoutes = [
   <Route
      key={SMART_FOOD_MANAGEMENT_HOME_PAGE}
      exact
      path={SMART_FOOD_MANAGEMENT_HOME_PAGE}
      component={HomePage}
   />
]
