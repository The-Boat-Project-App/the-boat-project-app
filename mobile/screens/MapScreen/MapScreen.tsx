import { useState, useEffect } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useReactiveVar } from '@apollo/client'
import { boatLocationVar } from '../../variables/boatLocation'

import boat from '../../assets/boat-pin.jpg'

interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  // const size = useWindowDimensions()
  // const { width, height } = size

  const [region, setRegion] = useState({})
  const boatLocationInApollo = useReactiveVar(boatLocationVar)
  useEffect(() => {
    ;(async () => {
      // console.log(await getCoordinate())
    })()
  }, [])

  const getInitialState = () => {
    return {
      region: {
        latitude: 43.3,
        longitude: 8.4,
        latitudeDelta: 12,
        longitudeDelta: 12,
      },
    }
  }

  const onRegionChange = (region) => {
    setRegion({ region })
  }
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 43.3,
          longitude: 3.4,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: boatLocationInApollo.latitude,
            longitude: boatLocationInApollo.longitude,
          }}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default MapScreen
