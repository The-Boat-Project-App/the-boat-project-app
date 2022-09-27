import * as SecureStore from 'expo-secure-store'

export const setAccessToken = async (accessToken: string, refreshToken: string) => {
  await SecureStore.setItemAsync('token', accessToken)
  await SecureStore.setItemAsync('refreshToken', refreshToken)
}

export const getRefreshToken = async () => {
  const refreshToken = await SecureStore.getItemAsync('refreshToken')
  if (refreshToken) {
    console.log('🔐 Refresh token 🔐   ' + refreshToken)
  } else {
    console.log('No refresh token stored.')
  }

  return refreshToken
}

export const getAccessToken = async () => {
  const token = await SecureStore.getItemAsync('token')
  if (token) {
    console.log('🔐 access token 🔐   ' + token)
  } else {
    console.log('No access token stored.')
  }

  return token
}

export const deleteAccessToken = async () => {
  await SecureStore.deleteItemAsync('token')
  await SecureStore.deleteItemAsync('refreshToken')
}
