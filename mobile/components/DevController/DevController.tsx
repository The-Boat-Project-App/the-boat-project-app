import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, useToast } from 'native-base'
import PropTypes from 'prop-types'
import { useUpdateTripMutation } from '../../graphql/graphql'
import { boatLocationVar } from '../../variables/boatLocation'

interface DevControllerProps {}

const DevController: React.FunctionComponent<DevControllerProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [scrapeBoatData] = useUpdateTripMutation()
  const toast = useToast()

  const scrapeLocation = async () => {
    console.log('clic detecté')
    setIsLoading(true)

    const response = await scrapeBoatData()

    console.log('response', response)

    if (response.data?.updateTrip) {
      setIsLoading(false)
      boatLocationVar({
        date: response.data?.updateTrip.locations.at(-1).date,
        description: response.data?.updateTrip.locations.at(-1).description,
        latitude: response.data?.updateTrip.locations.at(-1).latitude,
        longitude: response.data?.updateTrip.locations.at(-1).longitude,
        name: response.data?.updateTrip.locations.at(-1).name,
      })
      toast.show({
        description: 'Scraping effectué',
      })
    }
  }
  return (
    <View>
      {isLoading ? (
        <Button isLoading isLoadingText='Chargement...' onPress={scrapeLocation}>
          <Text className='color-white font-ralewayBold'>Scrape Boat Info</Text>
        </Button>
      ) : (
        <Button isLoadingText='Chargement...' onPress={scrapeLocation}>
          <Text className='color-white font-ralewayBold'>Scrape Boat Info</Text>
        </Button>
      )}
    </View>
  )
}

export default DevController
