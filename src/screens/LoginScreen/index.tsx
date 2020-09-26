import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';

import googleImg from '../../assets/images/google.png';
import facebookImg from '../../assets/images/facebook.png';

function LoginScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Sign In</Text>
        <View>
          <MyInput label="Email" placeholder="Email" />
          <MyInput label="Password" placeholder="Password" secureTextEntry />
        </View>
        <View style={styles.btnForgetContainer}>
          <MyButton label="Forget Password?" bold />
        </View>
        <MyButton label="SignIn" labelColor="#fff" bold bgColor="red" round />
        <Text style={styles.or}>Or</Text>
        <View style={styles.btnSocialGroup}>
          <View style={styles.btnSocial}>
            <MyButton
              label="Google"
              round
              bold
              headIcon={<Image source={googleImg} style={[styles.icon]} />}
            />
          </View>
          <View style={{width: 10}} />
          <View style={styles.btnSocial}>
            <MyButton
              label="Facebook"
              round
              labelColor="#fff"
              bgColor="#3A559F"
              bold
              headIcon={
                <Image
                  source={facebookImg}
                  style={[styles.icon, {backgroundColor: '#fff'}]}
                />
              }
            />
          </View>
        </View>
        <View style={styles.signupContainer}>
          <Text>Not yet a member,</Text>
          <MyButton label="Sign Up" labelColor="red" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapper: {
    padding: 14,
  },
  btnForgetContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  btnLabel: {
    fontWeight: 'bold',
  },
  btnSignIn: {
    backgroundColor: 'red',
  },
  btnSocialGroup: {
    flexDirection: 'row',
  },
  btnSocial: {
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  or: {
    textAlign: 'center',
    padding: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
