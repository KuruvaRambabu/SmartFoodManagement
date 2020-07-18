import React, { Component } from 'react'
import { observer } from 'mobx-react'

import i18n from '../../i18n'

import { LanguageSelectContainer, Languages } from './styledComponents'

interface LanguageSelectorProps {
   changeLanguage: (event: any) => void
   t: any
}

@observer
class LanguageSelector extends Component<LanguageSelectorProps> {
   render() {
      const { changeLanguage, t } = this.props
      return (
         <LanguageSelectContainer onChange={changeLanguage}>
            <Languages selected value='en'>
               {t('authenticationModule:english')}
            </Languages>
            <Languages value='te'>{t('authenticationModule:telugu')}</Languages>
         </LanguageSelectContainer>
      )
   }
}

export default LanguageSelector