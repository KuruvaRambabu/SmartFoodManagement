import React from 'react'
import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'
import HomePageRoute from './HomePageRoute/HomePageRoute'
import WeeklyMenuPageRoute from './WeeklyMenuPageRoute/WeeklyMenuPageRoute'
import MealPreferencePageRoute from './MealPreferencePageRoute/MealPreferencePageRoute'

import {
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE,
   SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE
} from '../../Common/routes/RouteConstants'
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
   />,
   <ProtectedRoute
      key={SMART_FOOD_MANAGEMENT_HOME_PAGE}
      exact
      path={`${SMART_FOOD_MANAGEMENT_HOME_PAGE}${SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE}/:id`}
      component={MealPreferencePageRoute}
   />
]
