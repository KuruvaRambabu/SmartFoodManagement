import React, { Component } from 'react'
import { observable } from 'mobx'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { DatePickerMainContainer, DateLabel } from './styledComponents'
import { observer } from 'mobx-react'

@observer
class DatePicker extends Component {
   @observable date = new Date()
   handleChange = date => {
      console.log(date)
      this.date = date
   }
   render() {
      return (
         <DatePickerMainContainer>
            <DateLabel>Date :</DateLabel>
            <ReactDatePicker
               selected={this.date}
               onChange={this.handleChange}
               dateFormat='yyyy-MM-dd'
               className='text-xl rounded h-10 border text-center w-36 focus:outline-none focus focus:outline      '
            />
         </DatePickerMainContainer>
      )
   }
}

export default DatePicker
