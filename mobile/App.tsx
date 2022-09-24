import { StatusBar } from 'expo-status-bar'
import RootNavigator from './navigation'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App() {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: `${process.env.API_URL}/graphql`,
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <RootNavigator />
      <StatusBar style='auto' />
    </ApolloProvider>
  )
}
