import { Text } from 'react-native'
import { useGetAllUsersQuery } from '../../graphql/graphql'

const FetchComponent = () => {
  //* Equivalent du fetch en GraphQL
  const { data } = useGetAllUsersQuery()
  console.log(data)
  //   if (loading || !data) {
  //     return <Text className='font-bold text-sm'>Chargement en cours ...</Text>
  //   }

  return <Text className='font-bold text-sm'>Bonjour</Text>
}
export default FetchComponent
