import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from '../components/products'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Product name="Kubelek" img={require('../images/kubelek.png')}/>
    <Product name="Twister" img={require('../images/twister.png')}/>
    <Product name="Wielka Dolewka" img={require('../images/dolewka.png')}/>
    <Product name="Gorące Skrzydelka" img={require('../images/skrzydelka.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});
