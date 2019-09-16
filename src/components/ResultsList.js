import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.results}>Results: {restaurants.length}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },
  results: {
    marginLeft: 15,
    color: '#afafaf',
    marginBottom: 5
  }
});

export default ResultsList;
