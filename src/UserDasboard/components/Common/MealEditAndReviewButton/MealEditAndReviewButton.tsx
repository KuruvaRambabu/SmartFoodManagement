import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import Button from '../../../../Common/components/Button/Button'
import { Typo14DarkBlueGreyHKGroteskRegularSpan } from '../../../../Common/styleGuide/Typos'

import {
   ButtonContainer,
   ButtonStyles,
   DisableEditButtonStyles
} from './styledComponents'
import { withHeaderComponent } from '../../../../Common/Hocs/withHeader'

import { formatDistance, compareAsc, subHours, subMinutes } from 'date-fns'

interface MealEditAndReviewButtonProps {
   deadLine: string
}

@observer
class MealEditAndReviewButton extends Component<MealEditAndReviewButtonProps> {
   @observable timeLeft: string = 'time'
   @observable isWithInTime: boolean = true

   componentDidMount() {
      const { deadLine } = this.props
      let date: any = new Date(deadLine).toUTCString()
      date = subHours(new Date(date), 5)
      date = subMinutes(new Date(date), 30)
      setInterval(() => {
         if (compareAsc(new Date(date), new Date()) === 1) {
            this.timeLeft = formatDistance(new Date(date), new Date(), {
               includeSeconds: true
            })
         } else {
            this.timeLeft = ' I Ate it'
            this.isWithInTime = false
         }
      }, 1000)
   }
   render() {
      return (
         <ButtonContainer>
            {this.isWithInTime ? (
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={() => alert('hii')}
                  buttonStyles={ButtonStyles}
                  name={`Edit ${this.timeLeft} Left`}
               />
            ) : (
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={() => alert('hii')}
                  buttonStyles={DisableEditButtonStyles}
                  name={'Edit Closed'}
                  disabled={true}
               />
            )}
         </ButtonContainer>
      )
   }
}

export default withHeaderComponent(MealEditAndReviewButton)
