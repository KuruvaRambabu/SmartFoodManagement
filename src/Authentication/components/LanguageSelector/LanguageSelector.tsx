import React, { Component } from 'react'
import { observer } from 'mobx-react'

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
            <Languages defaultValue='en'>
               {t('authenticationModule:english')}
            </Languages>
            <Languages value='te'>{t('authenticationModule:telugu')}</Languages>
         </LanguageSelectContainer>
      )
   }
}

export default LanguageSelector
