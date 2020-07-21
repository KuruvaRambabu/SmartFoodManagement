import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { isLoggedIn } from '../../../Authentication/utils/AuthUtils/AuthUtils'

import { SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE } from '../../routes/RouteConstants'

export const ProtectedRoute = observer(props => {
   const { component: Component, ...rest } = props
   if (isLoggedIn()) return <Route component={Component} {...rest} />
   else return <Redirect to={SMART_FOOD_MANAGEMENT_SIGN_IN_PAGE} />
})
