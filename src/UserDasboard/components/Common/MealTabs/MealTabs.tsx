import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import UserSelectedMealPreferenceModel from '../../../stores/models/UserSelectedMealPreferenceModel/UserSelectedMealPreferenceModel'
import { MealTabsMainContainer } from './styledComponents'
import HalfOrFullMealDetails from '../HalfOrFullMealDetails/HalfOrFullMealDetails'
import { observer } from 'mobx-react'
import CustomDetails from '../../CustomDetails/CustomDetails'

interface MealTabsProps {
   getUserMealPreferenceDetailsData: Array<UserSelectedMealPreferenceModel>
}
const color = 'blue'
@observer
class MealTabs extends Component<MealTabsProps> {
   renderMealPreferences = mealObject => {
      if (
         mealObject.mealPreference === 'Half Meal' ||
         mealObject.mealPreference === 'Full Meal'
      ) {
         return <HalfOrFullMealDetails mealItemsDetails={mealObject} />
      } else {
         return <CustomDetails customMealItemsDetails={mealObject} />
      }
   }

   panes: Array<any> = []
   renderMealTabs = () => {
      const { getUserMealPreferenceDetailsData } = this.props
      getUserMealPreferenceDetailsData.forEach(mealObject => {
         let eachMealPreference = {
            menuItem: mealObject.mealPreference,
            render: () => (
               <Tab.Pane attached={false}>
                  {this.renderMealPreferences(mealObject)}
               </Tab.Pane>
            )
         }
         this.panes.push(eachMealPreference)
      })
   }
   render() {
      return (
         <MealTabsMainContainer>
            {this.renderMealTabs()}
            <Tab
               menu={{
                  color,
                  secondary: true
               }}
               panes={this.panes}
            />
         </MealTabsMainContainer>
      )
   }
}

export default MealTabs
