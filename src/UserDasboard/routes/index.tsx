import {
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE
} from '../../Common/routes/RouteConstants'
import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'
import HomePageRoute from './HomePageRoute/HomePageRoute'
import WeeklyMenuPageRoute from './WeeklyMenuPageRoute/WeeklyMenuPageRoute'

export const userDashboardRoutes = [
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_HOME_PAGE}
      exact
      path={SMART_FOOD_MANAGEMENT_HOME_PAGE}
      component={HomePageRoute}
   />,
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE}
      exact
      path={SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE}
      component={WeeklyMenuPageRoute}
   />
]
