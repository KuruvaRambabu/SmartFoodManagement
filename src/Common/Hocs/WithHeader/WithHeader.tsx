import React, { Component } from 'react'
import Header from '../../components/Header/Header'

const withHeaderComponent = WrappedComponent => {
   class WithHeaderComponent extends Component {
      render() {
         return (
            <React.Fragment>
               <Header />
               <WrappedComponent />
            </React.Fragment>
         )
      }
   }
   return WithHeaderComponent
}

export default withHeaderComponent
