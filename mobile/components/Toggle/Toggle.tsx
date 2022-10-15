import React, { useState } from 'react'
import { Platform, Pressable } from 'react-native'
import { Switch } from 'native-base'
import { LanguageIcon } from 'react-native-heroicons/solid'

interface ToggleProps {
  isEnabled: boolean
}
const Toggle: React.FunctionComponent<ToggleProps> = ({ isEnabled }) => {
  const [isTranslated, setIsTranslated] = useState<boolean>(false)

  return (
    <Pressable className=' -mb-8' onPress={() => setIsTranslated(!isTranslated)}>
      <LanguageIcon
        color='#0C617D'
        size='22'
        style={{ alignSelf: 'center', marginBottom: Platform.OS == 'ios' ? 0 : -17 }}
      />
      <Switch
        size='sm'
        defaultIsChecked={false}
        isChecked={isTranslated}
        onToggle={() => setIsTranslated(!isTranslated)}
        onTrackColor='#87BC23'
      />
    </Pressable>
  )
}

export default Toggle
