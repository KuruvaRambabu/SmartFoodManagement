import {
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE,
   SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE
} from '../../../Common/routes/RouteConstants'

export const goToHomePage = history => {
   history.replace(SMART_FOOD_MANAGEMENT_HOME_PAGE)
}

export const navigateToSignUpPage = history => {
   history.push(SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE)
}

export const navigateToSignInPage = history => {
   history.push(SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE)
}
