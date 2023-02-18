import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../Component/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyInput from '../Component/MyInput';
import {myApi} from '../data/Api';
import Navbar from '../Component/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../store/slice/CartSlice';
import {updateNav} from '../store/slice/NavbarSlice';

const image = {
  uri: 'https://o.remove.bg/downloads/4e85385a-212e-49d1-9dce-4ac950a07de2/image-removebg-preview.png',
};
const MainScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const showNav = useSelector((state: any) => state.navbar);

  const MyProduct = useSelector((state: any) => state.product);
  const dispatch = useDispatch();

  // const openNavBtn = () => {
  //   dispatch(updateNav(true));
  // };
  // const openNavBtn1 = () => {

  // };
  return (
    <View style={styles.container}>
      {!showNav ? (
        <Navbar
          callback={() => {
            dispatch(updateNav(true));
            console.log(showNav);
          }}
        />
      ) : (
        <>
          <View style={styles.logo}>
            <Logo />
            <Text style={styles.logoTxt}>PLANTIFY</Text>
            <View style={styles.logoIcon}>
              <Icon
                name="bell-badge-outline"
                size={30}
                onPress={() => {
                  navigation.navigate('order');
                }}
              />
              <Icon
                name="view-headline"
                size={30}
                onPress={() => {
                  dispatch(updateNav(false));
                  console.log(showNav);
                }}
              />
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardHeading}>
                There’s a Plant {'\n'} for everyone
              </Text>
              <Text style={styles.cardText}>
                Get your 1st plant {'\n'} @ 40% off
              </Text>
            </View>
            <View>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}></ImageBackground>
            </View>
          </View>
          <View>
            <MyInput mode="outlined" placeHolder="Search" icon="magnify" />
          </View>
          <View style={styles.header}>
            <Text style={styles.TopPick}>Top Pick</Text>
            <Text>Indoor</Text>
            <Text>Outdoor</Text>
            <Text>Seeds</Text>
          </View>
          <ScrollView>
            {MyProduct?.map((e: any, i: any) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('plantdetail', {
                    id: e.id,
                    uri: e.uri,
                    name: e.name,
                    header: e.header,
                    price: e.price,
                    bio: e.bio,
                    size: e.size,
                    rating: e.rating,
                    water: e.water,
                    light: e.light,
                    fertilizer: e.fertilizer,
                    qty: e.qty,
                  });
                }}
                style={styles.radiusBoxmain}
                key={i}>
                <View style={styles.radiusBox}>
                  <View style={styles.radiusBoxText}>
                    <Text style={styles.radiusBoxHeading}>{e.header}</Text>
                    <Text style={styles.radiusBoxName}>{e.name}</Text>
                  </View>
                  <View style={styles.radiusBoxIcon}>
                    <Text style={styles.radiusBoxIconText}>{e.price}</Text>
                    <Icon
                      name="heart-outline"
                      size={40}
                      style={{paddingTop: 10, color: 'black'}}
                    />
                    <TouchableOpacity>
                      <Icon
                        name="shopping"
                        size={50}
                        style={{paddingStart: 10, color: '#0D986A'}}
                        onPress={() => {
                          dispatch(addCart(e));
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.radiusBoximg}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={e.uri}
                  />
                </View>
              </TouchableOpacity>
            ))}
            <View style={{width: '100%', height: 100, marginBottom: 400}}>
              <View
                style={{
                  borderBottomWidth: 3,
                  width: 40,
                  marginBottom: 10,
                }}></View>
              <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
                Plant a Life
              </Text>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#343a40'}}>
                Live amongst Living
              </Text>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'grey'}}>
                Spread the joy
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
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

  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#0D986A',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  cardHeading: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 25,
    fontFamily: 'Philosopher-Bold',
  },
  cardText: {
    color: '#FFFFFF',
    paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  image: {
    width: 130,
    // position: 'relative',
    flex: 1,
    // justifyContent: 'center',
    // top: 10,
    // left: 50,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  TopPick: {
    color: '#0D986A',
    borderBottomWidth: 1,
    borderBottomColor: '#0D986A',
  },
  radiusBox: {
    marginTop: 10,
    height: 180,
    width: 265,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 130,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 30,
    backgroundColor: '#9CE5CB',
  },
  radiusBoxmain: {
    marginVertical: 20,
    position: 'relative',
    height: 200,
    width: 150,
    display: 'flex',
    flexDirection: 'row',
  },
  radiusBoximg: {
    height: 150,
    width: 150,
    position: 'relative',
    left: -90,
    top: -40,
  },
  radiusBoxText: {
    paddingStart: 25,
    paddingTop: 25,
  },
  radiusBoxHeading: {
    color: 'black',
    fontWeight: '500',
  },
  radiusBoxName: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Philosopher-Bold',
  },
  radiusBoxIcon: {
    paddingTop: 15,
    paddingStart: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  radiusBoxIconText: {
    color: 'black',
    fontWeight: '600',
    paddingEnd: 30,
    fontSize: 20,
    paddingTop: 10,
  },
});
