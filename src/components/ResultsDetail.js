import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>{result.rating} Stars,</Text>
      <Text>{result.review_count} Reviws</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  }
});

export default ResultsDetail;
