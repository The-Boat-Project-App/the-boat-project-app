import { StatusBar } from 'expo-status-bar'
import RootNavigator from './navigation'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()

import { getAccessToken } from 'accessToken'

export default function App() {
  // Initialize Apollo Client
  const httpLink = createHttpLink({
    uri: `${process.env.API_URL}/graphql`,
  })
  //* On passe l'accesstoken dans les headers
  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const accessToken = await getAccessToken()
    console.log('accessToken dans App.tsx', accessToken)
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    }
  })
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
    credentials: 'include',
  })

  return (
    <ApolloProvider client={client}>
      <RootNavigator />
      <StatusBar style='auto' />
    </ApolloProvider>
  )
}
