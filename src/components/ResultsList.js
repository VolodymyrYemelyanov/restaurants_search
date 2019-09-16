import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {restaurants.length}</Text>
      <FlatList
        horizontal={true}
        data={restaurants}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;
