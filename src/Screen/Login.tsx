import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from '../Component/Button';
import Logo from '../Component/Logo';
import MyInput from '../Component/MyInput';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const LoginUser = () => {
    if (email === '' && password === '') {
      setError('Please enter Email and Password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          setEmail('');
          setPassword('');
          navigation.navigate('tab');
        })
        .catch(err => {
          setError(err.message);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.logoTxt}>PLANTIFY</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.para}>
          Masukan NISN dan password untuk memulai belajar sekarang
        </Text>
      </View>
      <View style={styles.mainInp}>
        <Text style={styles.inpTxt}>UserName/Email</Text>
        <MyInput
          value={email}
          onChange={(e: any) => {
            setEmail(e);
          }}
          mode="outlined"
          label="Email"
          placeHolder="Enter Your Email"
          type="email-address"
          icon="email-outline"
        />
      </View>
      <View style={styles.mainInp}>
        <Text style={styles.inpTxt}>Password</Text>
        <MyInput
          value={password}
          onChange={(e: any) => {
            setPassword(e);
          }}
          mode="outlined"
          label="Password"
          placeHolder="Enter Your Password"
          textEntry={true}
          icon="lock-outline"
        />
      </View>
      <View>
        <Text style={{color: 'red'}}>{error}</Text>
      </View>
      <View style={styles.link}>
        <Text>Create One </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.linkTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <MyButton
          mode="contained"
          text="Login"
          callback={() => {
            LoginUser();
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  logoTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingStart: 10,
    paddingTop: 5,
  },
  login: {
    marginVertical: 15,
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Philosopher-Bold',
    color: '#0D986A',
  },
  para: {
    color: '#0D986A',
  },
  mainInp: {
    marginTop: 25,
  },
  inpTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#adb5bd',
  },
  link: {
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  linkTxt: {
    color: '#0D986A',
  },
  btn: {
    marginTop: 30,
  },
});
