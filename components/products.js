import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.image} />
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
    width: "47%",
    margin: 10,
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
