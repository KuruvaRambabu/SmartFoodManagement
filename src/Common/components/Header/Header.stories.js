import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Header from './Header'

export default {
   component: Header,
   title: 'src/Header'
}

export const HeaderComponent = () => <Header />

export const knobs = () => <Header />

knobs.story = {
   decorators: [withKnobs]
}
