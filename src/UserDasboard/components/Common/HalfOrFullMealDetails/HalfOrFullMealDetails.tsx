import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   HalfOrFullMealDetailsMainContainer,
   ItemsMainContainer,
   ItemName,
   ItemNameAndCategoryContainer,
   Category,
   QuantityAndServingTypeContainer,
   QuantityAndServeType
} from './styledComponents'

interface HalfOrFullMealDetailsProps {
   mealItemsDetails: any
}

function renderItems(eachItem) {
   return (
      <ItemsMainContainer key={eachItem.itemId}>
         <ItemNameAndCategoryContainer>
            <ItemName>{eachItem.itemName}</ItemName>
            <Category>{eachItem.category}</Category>
         </ItemNameAndCategoryContainer>
         <QuantityAndServingTypeContainer>
            <QuantityAndServeType>
               {eachItem.quantity} {eachItem.servingType}
            </QuantityAndServeType>
         </QuantityAndServingTypeContainer>
      </ItemsMainContainer>
   )
}

@observer
class HalfOrFullMealDetails extends Component<HalfOrFullMealDetailsProps> {
   render() {
      const { listOfItems } = this.props.mealItemsDetails
      return (
         <HalfOrFullMealDetailsMainContainer>
            {listOfItems.map(eachItem => {
               return renderItems(eachItem)
            })}
         </HalfOrFullMealDetailsMainContainer>
      )
   }
}

export default HalfOrFullMealDetails
