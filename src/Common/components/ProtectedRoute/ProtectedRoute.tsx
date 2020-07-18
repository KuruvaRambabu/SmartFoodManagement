import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE } from '../../routes/RouteConstants'

export const ProtectedRoute = inject('authenticationStore')(
   observer(({ component: Component, authenticationStore, ...rest }) => {
      const accessToken = authenticationStore.accessToken
      return (
         <Route
            {...rest}
            render={(props: any) => {
               if (accessToken) {
                  return <Component />
               } else {
                  return (
                     <Redirect
                        to={{ pathname: SMART_FOOD_MANAGEMENT_SIGN_UP_PAGE }}
                     />
                  )
               }
            }}
         />
      )
   })
)
