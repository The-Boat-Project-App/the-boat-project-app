import { useState, useEffect } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import boat from '../../assets/boat-pin.jpg'

interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  // const size = useWindowDimensions()
  // const { width, height } = size

  const [region, setRegion] = useState({})

  useEffect(() => {
    ;(async () => {
      // console.log(await getCoordinate())
    })()
  }, [])

  const getInitialState = () => {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 1.0922,
          longitudeDelta: 1.0421,
        }}
        style={styles.map}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
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
