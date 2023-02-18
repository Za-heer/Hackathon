import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../Component/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {myApi} from '../data/Api';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../store/slice/CartSlice';

const SingleProduct = ({navigation, route}: {navigation: any; route: any}) => {
  const dispatch = useDispatch();
  // const product = useSelector((state: any) => state.product);
  const {
    id,
    detailUri,
    uri,
    name,
    header,
    price,
    bio,
    size,
    rating,
    water,
    light,
    fertilizer,
    qty,
  } = route.params;
  // console.log(
  //   id,
  //   uri,
  //   detailUri,
  //   name,
  //   header,
  //   price,
  //   bio,
  //   size,
  //   rating,
  //   water,
  //   light,
  //   fertilizer,
  // );
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.logoTxt}>PLANTIFY</Text>
          <View style={styles.logoIcon}>
            <Icon
              name="magnify"
              size={30}
              onPress={() => {
                navigation.navigate('order');
              }}
            />
            <Icon
              name="view-headline"
              size={30}
              onPress={() => {
                navigation.navigate('navbar');
              }}
            />
          </View>
        </View>
        <View style={styles.airPurifier}>
          <Text style={styles.airPurifierText}>
            {header} <Icon name="foot-print" color={'#0D986A'} size={20} />
          </Text>
          <Text style={styles.airPurifierIcon}>
            <Icon name="star" color={'#0D986A'} /> {rating}
          </Text>
        </View>
        <View>
          <Text style={styles.pep}>{name}</Text>
        </View>
      </View>
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.bottomContentIcon}>
          <Icon name="heart" size={28} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRigthContent}>
        <View style={styles.PriceSize}>
          <Text style={styles.price}>PRICE</Text>
          <Text style={styles.PriceIcon}>{price}</Text>
          <Text style={styles.size}>SIZE</Text>
          <Text style={styles.PriceIcon}>{size}</Text>
        </View>
        <TouchableOpacity
          style={styles.PriceSizeIcon}
          onPress={() => {
            dispatch(addCart(route.params));
            navigation.navigate('cart');
          }}>
          <Icon name="shopping" color={'#0D986A'} size={50} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentImg}>
        <Image style={{width: '100%', height: '100%'}} source={uri} />
      </View>
      <View style={styles.overview}>
        <View>
          <Text style={styles.overviewHead}>Overview</Text>
        </View>
        <View style={styles.essential}>
          <View>
            <Text style={styles.essentialIcon}>{water}</Text>
            <Text style={styles.essentialText}>
              <Icon name="water" color={'#FCCC1F'} />
              WATER
            </Text>
          </View>
          <View>
            <View>
              <Text style={styles.essentialIcon}>{light}</Text>
              <Text style={styles.essentialText}>
                <Icon name="white-balance-sunny" color={'#FCCC1F'} />
                LIGHT
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.essentialIcon}>{fertilizer}</Text>
              <Text style={styles.essentialText}>
                <Icon name="dots-hexagon" color={'#FCCC1F'} />
                FERTILIZER
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.plantBio}>
        <Text style={styles.plantBioHead}>Plant bio</Text>
        <Text style={styles.plantBioText}>{bio}</Text>
      </View>

      <View style={styles.SimilarPlant}>
        <Text style={styles.SimilarPlantHead}>Similar Plants</Text>
        {myApi?.map((e, i) => (
          <View style={styles.SimilarPlantBody} key={i}>
            <View>
              <View>
                <Text>{e.header}</Text>
                <Text>{e.name}</Text>
              </View>
              <View>
                <Text>{e.price}</Text>
                <Icon
                  name="heart-outline"
                  size={40}
                  style={{paddingTop: 10, color: 'black'}}
                />
                <Icon
                  name="card"
                  size={50}
                  style={{paddingStart: 10, color: '#0D986A'}}
                />
              </View>
            </View>
            <View>
              <Image style={{width: '80%', height: '100%'}} source={e.uri} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SingleProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
  topContent: {
    position: 'absolute',
    backgroundColor: '#9CE5CB',
    height: '35%',
    width: '100%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    paddingStart: 20,
  },
  logoTxt: {
    color: 'black',
    fontSize: 20,
    paddingStart: 10,
    paddingTop: 5,
    fontFamily: 'Philosopher-Bold',
  },
  logoIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginStart: 90,
    gap: 5,
  },
  bottomContent: {
    position: 'relative',
    top: 178,
    backgroundColor: '#9CE5CB',
    height: '30%',
    transform: [{rotate: '-17deg'}],
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 50,
  },
  bottomContentIcon: {
    paddingStart: 8,
    paddingVertical: 8,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    width: '12.5%',
    transform: [{rotate: '17deg'}],
    position: 'relative',
    left: 55,
    top: 200,
  },
  airPurifier: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  airPurifierText: {
    fontWeight: 'bold',
  },
  airPurifierIcon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingHorizontal: 10,
    color: '#0D986A',
  },
  pep: {
    fontSize: 30,
    fontFamily: 'Philosopher-Bold',
    paddingStart: 15,
  },
  PriceSize: {
    paddingLeft: 20,
  },
  price: {
    fontSize: 12,
    paddingTop: 20,
  },
  PriceIcon: {
    fontWeight: 'bold',
  },
  size: {
    fontSize: 12,
    paddingTop: 20,
  },
  PriceSizeIcon: {
    position: 'relative',
    top: 60,
    left: 20,
  },
  bottomRigthContent: {
    position: 'relative',
    height: '30.5%',
    width: '20%',
    backgroundColor: '#9CE5CB',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 5,
  },
  contentImg: {
    height: 250,
    width: 250,
    position: 'relative',
    left: 110,
    top: -200,
  },
  overview: {
    position: 'relative',
    top: -190,
    paddingHorizontal: 20,
  },
  overviewHead: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
  },
  essential: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  essentialText: {
    fontSize: 10,
  },
  essentialIcon: {
    color: '#0D986A',
    fontWeight: '600',
  },
  plantBio: {
    position: 'relative',
    top: -190,
    paddingHorizontal: 20,
  },
  plantBioHead: {
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    color: 'black',
  },
  plantBioText: {
    fontSize: 13,
  },
  SimilarPlant: {
    paddingHorizontal: 20,
  },
  SimilarPlantHead: {
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    color: 'black',
  },
  SimilarPlantBody: {
    width: '40%',
    height: 200,
  },
});
