import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../Component/Logo';
import {TouchableOpacity} from 'react-native';
import {addCart, deleteCart, removeCart} from '../store/slice/CartSlice';

const Cart = ({navigation}: {navigation: any}) => {
  const MyCart = useSelector((state: any) => state.cart);
  console.log(MyCart, 'carddddd');
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container}>
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

      <View>
        <Text style={styles.heading}>Your Bag</Text>
      </View>
      {MyCart.length !== 0 ? (
        MyCart?.map((e: any, i: any) => {
          return (
            <View key={i} style={styles.cartContainer}>
              <View style={styles.cartImg}>
                <Image style={{width: '100%', height: '100%'}} source={e.uri} />
              </View>
              <View style={styles.cartBody}>
                <View style={styles.cartContent}>
                  <Text style={styles.cartName}>{e.name}</Text>
                  <View style={styles.increment}>
                    <TouchableOpacity
                      style={styles.minus}
                      onPress={() => {
                        if (e.qty > 1) {
                          dispatch(removeCart(e));
                        } else {
                          dispatch(deleteCart(e.id));
                        }
                      }}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#0D986A'}}>{e.qty}</Text>
                    <TouchableOpacity
                      style={styles.plus}
                      onPress={() => {
                        dispatch(addCart(e));
                      }}>
                      <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(deleteCart(e.id));
                      }}>
                      <Icon
                        name="trash-can-outline"
                        size={25}
                        color={'#0D986A'}
                        style={styles.cartIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.price}>
                  <Icon
                    name="bookmark-outline"
                    size={30}
                    color={'#0D986A'}
                    style={styles.priceIcon}
                  />
                  <Text style={styles.priceText}>{e.price}</Text>
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <View style={styles.emptyBox}>
          <View style={{width: 100, height: 100}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../Assets/emptyBox.png')}
            />
            <Text>Empty :( </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Cart;

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
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0D986A',
    paddingVertical: 20,
  },
  cartContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  cartImg: {
    width: 80,
    height: 80,
  },
  cartBody: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
  },
  cartContent: {
    width: '58%',
    paddingStart: 10,
  },
  increment: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  cartName: {
    color: 'black',
    fontFamily: 'Philosopher-Bold',
  },
  plus: {
    height: 23,
    textAlign: 'center',
    borderWidth: 1,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  minus: {
    height: 23,
    textAlign: 'center',
    borderWidth: 1,
    fontWeight: 'bold',
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  cartIcon: {
    paddingStart: 15,
  },
  priceIcon: {
    // paddingTop: 10,
  },
  priceText: {
    fontWeight: 'bold',
    paddingStart: 8,
  },
  emptyBox: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 100,
  },
});

{
  /* <FlatList
        data={MyCart}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <View>
                <Image
                  style={{width: '80%', height: '100%'}}
                  source={item.uri}
                />
              </View>
              <View>
                <View>
                  <Text>{item.name}</Text>
                  <View>
                    <Text>+</Text>
                  </View>
                </View>
                <View>
                  <Text>{item.price}</Text>
                  <Text>{item.bio}</Text>
                </View>
              </View>
            </View>
          );
        }}
      /> */
}
