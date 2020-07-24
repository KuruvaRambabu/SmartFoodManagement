import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { MealTypeContainer } from '../MealCardDetails/styledComponents'
import { observable } from 'mobx'

import {
   MealTabsMainContainer,
   FullMealTabContainer,
   HalfMealTabContainer,
   CustomMealTabContainer,
   FullMealTabText,
   HalfMealTabText,
   CustomMealTabText,
   MealTabsContainer,
   MealTabsAndDateContainer
} from './styledComponents'
import DatePicker from '../../../../Common/components/DatePicker/DatePicker'

class MealTabs extends Component {
   @observable selectedTab = 'fullMeal'
   render() {
      return (
         <MealTabsMainContainer>
            <MealTabsAndDateContainer>
               <MealTabsContainer>
                  <FullMealTabContainer>
                     <FullMealTabText>Full meal</FullMealTabText>
                  </FullMealTabContainer>
                  <HalfMealTabContainer>
                     <HalfMealTabText>Half meal</HalfMealTabText>
                  </HalfMealTabContainer>
                  <CustomMealTabContainer>
                     <CustomMealTabText>Custom</CustomMealTabText>
                  </CustomMealTabContainer>
                  <DatePicker />
               </MealTabsContainer>
            </MealTabsAndDateContainer>
         </MealTabsMainContainer>
      )
   }
}

export default MealTabs
