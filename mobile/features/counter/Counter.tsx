import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'
import { Button, Text, View, TextInput } from 'react-native'

export function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState<string>('0')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <View>
      <Text className='text-xl font-bold'>Compteur dans le store : {count}</Text>

      <Button title='Ajouter +1' onPress={() => dispatch(decrement())} />
      <Button title='Retirer 1' onPress={() => dispatch(increment())} />

      <TextInput
        placeholder='Nombre à ajouter au compteur'
        onChangeText={(value) => setIncrementAmount(value)}
        defaultValue={incrementAmount}
        keyboardType='phone-pad'
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 rounded-xl'
      />
      <Button onPress={() => dispatch(incrementByAmount(incrementValue))} title='add amount' />
      <Button onPress={() => dispatch(incrementAsync(incrementValue))} title='add async' />
      <Button onPress={() => dispatch(incrementIfOdd(incrementValue))} title='add if odd' />
    </View>
  )
}
