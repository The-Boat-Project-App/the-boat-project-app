import { StatusBar } from 'expo-status-bar'
import RootNavigator from './navigation'
import { Provider } from 'react-redux'
import { store } from './app/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
      <StatusBar style='auto' />
    </Provider>
  )
}
