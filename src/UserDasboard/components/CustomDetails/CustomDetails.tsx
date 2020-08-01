import React, { Component } from 'react'
import {
   CustomDetailsMainContainer,
   RenderMealItemsMainContainer,
   SelectCustomPreferencesContainer
} from './styledComponents'
import { observer } from 'mobx-react'
import UserSelectedMealPreferenceModel from '../../stores/models/UserSelectedMealPreferenceModel/UserSelectedMealPreferenceModel'
import MealItemsModel from '../../stores/models/MealItemsModel/MealItemsModel'
import {
   ItemNameAndCategoryContainer,
   ItemName,
   Category
} from '../Common/HalfOrFullMealDetails/styledComponents'
import CounterApp from '../../../Common/components/CounterAppComponent'
import { Item } from '../Common/ItemsName/styledComponents'

interface CustomMealPreferenceDetailsProps {
   customMealItemsDetails: any
}

@observer
class CustomMealPreferenceDetails extends Component<
   CustomMealPreferenceDetailsProps
> {
   renderCustomMealItems = observer(({ eachItem }) => {
      return (
         <RenderMealItemsMainContainer>
            <ItemNameAndCategoryContainer>
               <ItemName>{eachItem.itemName}</ItemName>
               <Category>{eachItem.category}</Category>
            </ItemNameAndCategoryContainer>
            <SelectCustomPreferencesContainer>
               <CounterApp
                  quantity={eachItem.quantity}
                  onIncrementQuantity={eachItem.onIncrementQuantity}
                  onDecrementQuantity={eachItem.onDecrementQuantity}
               />
            </SelectCustomPreferencesContainer>
         </RenderMealItemsMainContainer>
      )
   })
   render() {
      const { listOfItems } = this.props.customMealItemsDetails
      const { renderCustomMealItems: RenderCustomMealItems } = this
      return (
         <CustomDetailsMainContainer>
            {listOfItems.map(eachItem => {
               return (
                  <RenderCustomMealItems
                     key={eachItem.itemId}
                     eachItem={eachItem}
                  />
               )
            })}
         </CustomDetailsMainContainer>
      )
   }
}

export default CustomMealPreferenceDetails
