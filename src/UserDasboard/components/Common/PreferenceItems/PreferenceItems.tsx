import React, { Component } from 'react'
import {
   PreferenceItemsMainContainer,
   ItemsContainer,
   ImageContainer,
   FoodIllustrationImage
} from './styledComponents'
import { observer } from 'mobx-react'
import DatePicker from '../../../../Common/components/DatePicker/DatePicker'

interface PreferenceItemsProps {
   selectedMealType: string
}

@observer
class PreferenceItems extends Component<PreferenceItemsProps> {
   render() {
      return (
         <PreferenceItemsMainContainer>
            <DatePicker />
            <ImageContainer>
               <FoodIllustrationImage
                  src={
                     'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/b69f1a68-b1d7-4eed-b1b0-f9a60a3e3595.png'
                  }
               ></FoodIllustrationImage>
            </ImageContainer>
         </PreferenceItemsMainContainer>
      )
   }
}

export default PreferenceItems
