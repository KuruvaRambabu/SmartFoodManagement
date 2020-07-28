 
import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

 interface MealTabsProps{
   selectedMealType:string
   onChangeMealType:any
 }

const panes = [
   {
      menuItem: 'Full meal',
      render: () => <Tab.Pane attached={false}> </Tab.Pane>
   },
   {
      menuItem: 'Half meal',
      render: () => <Tab.Pane attached={false}></Tab.Pane>
   },
   {
      menuItem: 'Custom',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
   }
]
class MealTabs extends Component <MealTabsProps> {
   render() {
      const color = 'blue'

      return (
         <div>
            <Tab
               menu={{ color, pointing: true, attached: false, tabular: false }}
               panes={panes}
            />
         </div>
      )
   }
}


export default MealTabs
