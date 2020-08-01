import {
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE,
   SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE,
   SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE
} from '../../../Common/routes/RouteConstants'

export const navigateToHomePage = history => {
   history.replace(SMART_FOOD_MANAGEMENT_HOME_PAGE)
}

export const navigateToWeeklyMenuPage = history => {
   history.push(SMART_FOOD_MANAGEMENT_WEEKLY_MENU_PAGE)
}

export const navigateToSetMealPreferencePage = (history, date, mealType) => {
   history.push({
      pathname: `${SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE}`,
      search: `?date=${date}&meal_type=${mealType}`
   })
}
