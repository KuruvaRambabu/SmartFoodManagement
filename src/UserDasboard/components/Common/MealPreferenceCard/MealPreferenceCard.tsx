import React, { Component } from 'react'

import {
   MealPreferenceCardMainContainer,
   MealPreferenceCardContainer
} from './styledComponents'
import { UpdateMealPreferenceAndBackButtons } from '../UpdateMealPreferenceAndBackButtons'
import MealTabs from '../MealTabs/MealTabs'

class MealPreferenceCard extends Component {
   render() {
      return (
         <MealPreferenceCardMainContainer>
            <MealPreferenceCardContainer>
               <MealTabs />
               <UpdateMealPreferenceAndBackButtons />
            </MealPreferenceCardContainer>
         </MealPreferenceCardMainContainer>
      )
   }
}

export default MealPreferenceCard
