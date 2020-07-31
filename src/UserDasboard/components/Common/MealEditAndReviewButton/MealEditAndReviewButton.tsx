import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import Button from '../../../../Common/components/Button/Button'
import {
   Typo14DarkBlueGreyHKGroteskRegularSpan,
   Typo14DarkBlueGreyHKGroteskSemiBold
} from '../../../../Common/styleGuide/Typos'

import {
   ButtonContainer,
   ButtonStyles,
   DisableEditButtonStyles,
   IAteAndSkippedContainer,
   IAteItButtonStyles,
   ISkippedButtonStyles,
   ReviewButtonStyles
} from './styledComponents'

import {
   formatDistance,
   getTime,
   compareAsc,
   subHours,
   subMinutes,
   format
} from 'date-fns'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
   SMART_FOOD_MANAGEMENT_HOME_PAGE,
   SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE
} from '../../../../Common/routes/RouteConstants'

interface MealEditAndReviewButtonProps extends RouteComponentProps {
   deadLine: string
   mealType: string
   startTime: string
   endTime: string
}

@observer
class MealEditAndReviewButton extends Component<MealEditAndReviewButtonProps> {
   @observable timeLeft: string = 'time'
   @observable isWithInTime: boolean = true
   @observable isTimeBetweenTheMealTimings: boolean = false
   @observable isReviewButtonTime: boolean = false
   timer

   componentDidMount() {
      this.renderTimings()
   }
   renderTimings = () => {
      const { deadLine, startTime, endTime } = this.props
      this.timer = setInterval(() => {
         if (compareAsc(new Date(deadLine), new Date()) === 1) {
            this.timeLeft = formatDistance(new Date(deadLine), new Date(), {
               includeSeconds: true
            })
         } else if (compareAsc(new Date(startTime), new Date()) === 1) {
            this.isWithInTime = false
            this.timeLeft = 'Edit closed'
         } else if (
            compareAsc(new Date(), new Date(startTime)) === 1 &&
            compareAsc(new Date(endTime), new Date()) === 1
         ) {
            this.timeLeft = ' I Ate it'
            this.isWithInTime = false
            this.isTimeBetweenTheMealTimings = true
         } else {
            this.isReviewButtonTime = true
            this.isTimeBetweenTheMealTimings = false
         }
      })
   }
   onClickEditPreferenceButton = () => {
      const { history, mealType } = this.props
      history.push({
         pathname: `${SMART_FOOD_MANAGEMENT_MEAL_PREFERENCE_PAGE}`,
         search: `?date=01/05/2020&meal_type=${mealType}`
      })
   }
   componentWillUnmount() {
      this.timer
   }
   render() {
      const { mealType } = this.props
      if (
         this.isWithInTime &&
         !this.isReviewButtonTime &&
         !this.isTimeBetweenTheMealTimings
      ) {
         return (
            <ButtonContainer>
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={this.onClickEditPreferenceButton}
                  buttonStyles={ButtonStyles}
                  name={`Edit ${this.timeLeft} Left`}
                  id={mealType}
               />
            </ButtonContainer>
         )
      } else if (
         !this.isWithInTime &&
         !this.isTimeBetweenTheMealTimings &&
         !this.isReviewButtonTime
      ) {
         return (
            <ButtonContainer>
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={this.onClickEditPreferenceButton}
                  buttonStyles={DisableEditButtonStyles}
                  name={`${this.timeLeft}`}
                  disabled={true}
                  id={mealType}
               />
            </ButtonContainer>
         )
      } else if (this.isTimeBetweenTheMealTimings && !this.isReviewButtonTime) {
         return (
            <IAteAndSkippedContainer>
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskRegularSpan}
                  type={Button.buttonType.filled}
                  onClick={this.onClickEditPreferenceButton}
                  buttonStyles={IAteItButtonStyles}
                  name={`I Ate it`}
                  id={mealType}
               />

               <Button
                  typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                  type={Button.buttonType.outline}
                  onClick={this.onClickEditPreferenceButton}
                  buttonStyles={ISkippedButtonStyles}
                  name={`I skipped `}
                  id={mealType}
               />
            </IAteAndSkippedContainer>
         )
      } else {
         return (
            <ButtonContainer>
               <Button
                  typo={Typo14DarkBlueGreyHKGroteskSemiBold}
                  type={Button.buttonType.filled}
                  onClick={this.onClickEditPreferenceButton}
                  buttonStyles={ReviewButtonStyles}
                  name={`${'Review Food'}`}
                  id={mealType}
               />
            </ButtonContainer>
         )
      }
   }
}

export default withRouter(MealEditAndReviewButton)
