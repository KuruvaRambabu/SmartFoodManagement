import React, { Component } from 'react'
import { Item, ItemContainer } from './styledComponents'
import { observer } from 'mobx-react'

interface ItemsNameProps {
   item: string
   index: number
}
@observer
class ItemsName extends Component<ItemsNameProps> {
   render() {
      const { item, index } = this.props
      return (
         <ItemContainer>
            <Item>{item}</Item>
         </ItemContainer>
      )
   }
}

export default ItemsName
