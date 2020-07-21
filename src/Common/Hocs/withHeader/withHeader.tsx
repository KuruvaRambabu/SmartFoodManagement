import React, { Component, ReactComponentElement } from 'react'
import Header from '../../components/Header/Header'

function withHeaderComponent<T>(WrappedComponent: React.ComponentType<T>) {
   class WithHeaderComponent extends Component<T> {
      render() {
         const props = this.props as T
         return (
            <React.Fragment>
               <WrappedComponent {...props} />
            </React.Fragment>
         )
      }
   }
   return WithHeaderComponent
}

export default withHeaderComponent
