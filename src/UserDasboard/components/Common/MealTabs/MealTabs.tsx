import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const panes = [
   {
      menuItem: 'Full meal',
      render: () => <Tab.Pane attached={false}> </Tab.Pane>
   },
   {
      menuItem: 'Half meal',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
   },
   {
      menuItem: 'Custom',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
   }
]
class MealTabs extends Component {
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
