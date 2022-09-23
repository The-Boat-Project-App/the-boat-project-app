import { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { API_URL } from 'react-native-dotenv'

import CustomButton from '../../components/CustomButton/CustomButton'

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({}) => {
  console.log('API_URL', API_URL)
  const [serverSurprise, setServerSurprise] = useState('...')
  const fetchData = () => {
    console.log('fetching data from server...')
    fetch(`${API_URL}/test`)
      .then((res) => res.json())
      .then((data) => setServerSurprise(data.surprise))
  }
  return (
    <View className='flex-1 bg-white '>
      {/* bg-slate-100 */}
      <View className='flex-row bg-white mt-11 pb-2 pl-5'>
        <View>
          <Image
            className='mb-2'
            source={{
              uri: 'https://uc9e29996338651150bd38676e06.previews.dropboxusercontent.com/p/pdf_img/ABozO0ulHmBlOJ8DjZ8GhrRkVqApARV9oe4fiMIMJbAzJiaIXHhnzJUZ7VYzosTTmNE5sdllEMChw7Al6qcbyPLLB_qt14wdYRMDUfY9QopyHqoKT_SkJcZTFsN8rjpUKp5YWFZ_Ku3B9VP8iEsP3t87er8GgZ19QMQRUAU2Xfb64EuQD4ZoyGaj03J8p7E_t5KYzm8FYx2MT6gUIY84M42TFZ-xl4t9ymO1aHtdSnCDLVj2bsGViqeAxlY-YSeVT29dyLcvNxNZppW2RSYlGfxNoVqCf4X2WnDTHaWOXxDrjjVn9WwR0AJ6IB1ILmFbgkFijQi93YgQNdIpF-yp1AJX2wzZX8gZGSlot5N0OGqtioPT9mAMhhhuEtqfL6iq-ixXRsnmyaF6crUR9s-CSz89/p.png?page=0&scale_percent=0',
            }}
            style={styles.logo}
          />
          <View className='flex-row space-x-4'>
            <TouchableOpacity className=' mt-1 p-2 border border-cyan-700 rounded-lg '>
              <Text className='color-cyan-700 font-bold text-xs'>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-1 p-2 border border-cyan-700 rounded-lg bg-cyan-700'>
              <Text className='color-white font-bold text-xs'>FR</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-1 p-2 border border-cyan-700 rounded-lg'>
              <Text className='color-cyan-700 font-bold text-xs'>ES</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-1 p-2 border border-cyan-700 rounded-lg'>
              <Text className='color-cyan-700 font-bold text-xs'>AR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='pl-5 items-end'>
          <Text className='color-cyan-700 text-xs'>Départ 1ère édition :</Text>
          <Text className='color-cyan-700 text-xs'>23 janvier 2023</Text>
          <View className='flex-row rounded-xl p-3 mt-4 ' style={styles.colorDate}>
            <Text className='color-white font-bold '>J- 159</Text>
            <Text className='color-white'> 18 : 30 : 22</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View className='justify-center bg-slate-100 pl-2 pr-2'>
          <Text className='font-bold text-xl color-cyan-900 '>Actualités</Text>
          <ScrollView className='' horizontal={true}>
            <TouchableOpacity className='w-48 p-2'>
              <Image
                className='rounded-xl w-full h-16'
                source={{
                  uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-excursion-en-bateau-au-depart-de-canet-en-roussillon-ou-port-vendres-e1491042490649.jpg',
                }}
              />
              <Text className='font-bold color-cyan-900 text-xs'>Aujourd'hui, 14h02</Text>
              <Text className='font-bold color-cyan-900'>Départ imminent !</Text>
              <Text className='color-cyan-900'>
                Les dernier prépartatifs terminés, le voilier pourra partir du Port de Tanger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-48 p-2'>
              <Image
                className='rounded-xl w-full h-16'
                source={{
                  uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                }}
              />
              <Text className='font-bold color-cyan-900 text-xs'>Aujourd'hui, 14h02</Text>
              <Text className='font-bold color-cyan-900'>Départ imminent !</Text>
              <Text className='color-cyan-900'>
                Les dernier prépartatifs terminés, le voilier pourra partir du Port de Tanger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-48 p-2'>
              <Image
                className='rounded-xl w-full h-16'
                source={{
                  uri: 'https://navivoile.com/wp-content/uploads/2014/11/catamaran-navivoile-promenade-en-bateau-dans-les-pyrenees-orientales-au-depart-de-canet-en-roussillon-et-port-vendres-croisiere-a-la-rencotre-du-grand-dauphin-au-large-de-collioure.jpg',
                }}
              />
              <Text className='font-bold color-cyan-900 text-xs'>Aujourd'hui, 14h02</Text>
              <Text className='font-bold color-cyan-900'>Départ imminent !</Text>
              <Text className='color-cyan-900'>
                Les dernier prépartatifs terminés, le voilier pourra partir du Port de Tanger
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='w-48 p-2'>
              <Image
                className='rounded-xl w-full h-16'
                source={{
                  uri: 'https://www.douane.gouv.fr/sites/default/files/styles/actuedetail_screen_mob_576x405/public/2018-09/bateau_de_plaisance.jpg?itok=VwmFZWce',
                }}
              />
              <Text className='font-bold color-cyan-900 text-xs'>Aujourd'hui, 14h02</Text>
              <Text className='font-bold color-cyan-900'>Départ imminent !</Text>
              <Text className='color-cyan-900'>
                Les dernier prépartatifs terminés, le voilier pourra partir du Port de Tanger
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity className='p-2  ml-2 mr-2 mt-3 rounded-xl bg-white'>
            <Image
              className='w-full h-20 rounded-xl'
              source={{
                uri: 'https://media.peche.com/src/images/news/articles/ima-image-31469.png',
              }}
            />
          </TouchableOpacity>
          <Text className='text-xl font-bold color-cyan-900 mt-2'>
            Les compagnon de la Méditéranée
          </Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <Image
                className='w-20 h-20 rounded-full mt-3 ml-3'
                source={{
                  uri: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className='w-20 h-20 rounded-full mt-3 ml-5'
                source={{
                  uri: 'https://images.generated.photos/2mP6i-lgiMAV6cANGDvtzOUmmpxBlXmgPTDbPXpXFXI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTEwNjQwLmpwZw.jpg',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className='w-20 h-20 rounded-full mt-3 ml-5'
                source={{
                  uri: 'https://images.generated.photos/Xe8--H3Qq5-D3SFPjyXUlM9_IfEBW6Cel1xvgiHs1BQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA3NDgzLmpwZw.jpg',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className='w-20 h-20 rounded-full mt-3 ml-5'
                source={{
                  uri: 'https://images.generated.photos/IGZl6dv0T47ysuuZ2Ey9rToJn6iJcGFdcrm9L5d2D5E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE5MzQ1LmpwZw.jpg',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                className='w-20 h-20 rounded-full mt-3 ml-5'
                source={{
                  uri: 'https://images.generated.photos/L6lY2XxPYACw1nNjsSJJdm-E-FzvcsiMUu2814De7RM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIyOTU2LmpwZw.jpg',
                }}
              />
            </TouchableOpacity>
          </ScrollView>

          <Text className='text-xl font-bold color-cyan-900 mt-2'>Les dernières publications</Text>

          <ScrollView>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3 '>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row bg-white p-2 rounded-xl mb-2'>
              <View>
                <Image
                  className='h-20 w-40 rounded-xl'
                  source={{
                    uri: 'https://navivoile.com/wp-content/uploads/2017/03/catamaran-navivoile-croisiere-port-vendres-et-collioure-et-littoral-le-long-de-la-cote-rocheuse-600x600.jpg',
                  }}
                />
              </View>
              <View className='w-2/4 pl-3'>
                <Text className='font-bold color-cyan-900'>Une mer de plastique</Text>
                <Text className='text-xs color-cyan-900'>
                  Nous avaons exploré les côte de Sardainge pour découvir une véritable catastrophe.
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* <Text className='font-bold text-xl'>Au boulot ! ⛵</Text>
        <CustomButton buttonTitle='Fetcher le serveur' onPress={fetchData} />
        <Text>{serverSurprise}</Text>
        <StatusBar style='auto' /> */}
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
  },
  colorBlue: { color: '#0C617D' },
  colorDate: { backgroundColor: '#139db8' },
})

export default HomeScreen
